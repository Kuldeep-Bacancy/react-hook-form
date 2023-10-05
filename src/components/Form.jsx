import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

function Form() {
  const { register, handleSubmit, formState, reset, control } = useForm({
    defaultValues:{
      username: 'test user',
      email: '',
      channel: '',
      social: {
        twitter: '',
        facebook: ''
      },
      phoneNumbers: ["",""],
      phNumbers: [{ number: "" }]
    }
  });
  const { errors } = formState

  const onSubmit = (data) => {
    console.log("Submited Data is", data);
    reset();
  }

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control: control
  })

  return (
    <div>
      <h1>YouTube Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username", { required: 'Username is required!' } )} />
        <p className='error'>{ errors.username?.message }</p>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email", { required: 'Email is required!' } )} />
        <p className='error'>{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel", { required: 'Channel is required!' } )} />
        <p className='error'>{errors.channel?.message}</p>
        
        <label htmlFor="twitter">Twitter</label>
        <input type="text" id="twitter" {...register("social.twitter", { required: 'Twitter is required!' })} />
        <p className='error'>{errors.social?.twitter?.message}</p>

        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" {...register("social.facebook", { required: 'Facebook is required!' })} />
        <p className='error'>{errors.social?.facebook?.message}</p>

        <label htmlFor="primary-phone">Primary Phone number</label>
        <input type="text" id="primary-phone" {...register("phoneNumbers.0", { required: 'Primary Phone is required!' })} />

        <label htmlFor="secondary-phone">Secondary Phone number</label>
        <input type="text" id="secondary-phone" {...register("phoneNumbers.1", { required: 'Secondary Phone is required!' })} />

        <label htmlFor='list-of-phone-numbers'>List of Phone Numbers</label>
        <div>
          {
            fields.map((field, index) => {
              return(
                <div key={field.id}>
                  <input type='text' {...register(`phNumbers.${index}.number`)}/>
                  {
                    index > 0 && (
                      <button type="button" onClick={() => remove(index)}>Remove Phone Number</button>
                    )
                  }
                </div>
              )
            })
          }
          <button type="button" onClick={() => append({number: ''})}>Add Phone Number</button>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form