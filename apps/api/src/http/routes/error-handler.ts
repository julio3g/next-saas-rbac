import type { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'

import { BadRequestError } from './_errors/bad-request-error'
import { UnauthorizedError } from './_errors/unauthorized-error'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, replay) => {
  if (error instanceof ZodError) {
    return replay.status(400).send({
      message: 'Validation error.',
      errors: error.flatten().fieldErrors,
    })
  }
  if (error instanceof BadRequestError) {
    return replay.status(400).send({
      message: error.message,
    })
  }
  if (error instanceof UnauthorizedError) {
    return replay.status(401).send({
      message: error.message,
    })
  }

  console.log(error)

  // send error to some observability platform

  return replay.status(500).send({ message: 'Internal server error.' })
}
