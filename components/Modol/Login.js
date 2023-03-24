import React from 'react'
import {useForm} from '@mantine/form'
import { Button, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Component } from 'react/cjs/react.production.min';

export default function Login() {
    const form = useForm({
        intialValues:{
            email:"",
            password:"",
        },
    });
 /**Gets user input for login and Email */
    return (
    <div>
        <form>
            <TextInput
            withAsterisk
            Label='Email'
            placeholder="your@email.com"
            {..form.getInputProps("email")}
            />
            <div className="mx-auto mt-2 mb-2 text-center bg-black text-white ">
                <Button className='bg-black'>
                Submit
            </Button>
            </div>

        </form>
        </div>
  );
}
