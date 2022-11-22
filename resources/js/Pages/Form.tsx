import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'
import {Link} from "@inertiajs/inertia-react";

export default function Edit() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
        console.log('valuer', values)
        Inertia.post('/data', values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First name:</label>
            <input id="first_name" value={values.first_name} onChange={handleChange} />
            <label htmlFor="last_name">Last name:</label>
            <input id="last_name" value={values.last_name} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input id="email" value={values.email} onChange={handleChange} />
            <button type="submit">Submit</button>
            <Link href="/">Welcome</Link>
        </form>
    )
}
