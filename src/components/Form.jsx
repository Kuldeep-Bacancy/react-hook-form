import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState

  const onSubmit = (data) => {
    console.log("Submited Data is", data);
  }

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

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form