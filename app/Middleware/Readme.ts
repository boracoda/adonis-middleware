import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import * as readme                  from 'readmeio'
import Env                          from '@ioc:Adonis/Core/Env'

export default class Readme {

  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {

    console.log('Teste')

    readme.log(Env.get('READMEIO_KEY'), request.request, response.response, {
      apiKey: `teste`,
      label: `Lucas Almeida`,
      email: `lucas@movingpay.com.br`
    })

    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()

  }

}
