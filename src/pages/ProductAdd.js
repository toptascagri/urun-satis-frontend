import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import CagriTextInput from '../utilities/customFormControls/CagriTextInput';

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice:10 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    })


    return (

        <div>
            
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <CagriTextInput name="productName" placeholder="Ürün adı"/>
                    <CagriTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
                    <Button type='submit' color='green'>
                        Ekle
                    </Button>
                </Form>

            </Formik>
        </div>
    )
}
