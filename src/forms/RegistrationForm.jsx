import { useFieldArray, useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        name: 'socials',
        control,
    });

    const submitForm = (formData) => {
        console.log(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label={'Registration form'}>
                    <Field label={'User name'} error={errors.userName}>
                        <input
                            {...register('userName', {
                                required: 'Username is required',
                            })}
                            className="p-2 border border-box rounded-md w-75 border-gray-200"
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Your username"
                        />
                    </Field>

                    <Field label={'Your id'} error={errors.id}>
                        <input
                            {...register('id', {
                                required: 'ID is required',
                                max: {
                                    value: 1000,
                                    message: 'Your id must be 1 to 1000',
                                },
                            })}
                            className="p-2 border border-box rounded-md w-75 border-gray-200"
                            type="number"
                            placeholder="Enter your id"
                            name="id"
                            id="id"
                        />
                    </Field>

                    <Field label={'Email address'} error={errors.email}>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                            })}
                            className="p-2 border border-box rounded-md w-75 border-gray-200"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email address"
                        />
                    </Field>
                    <Field label={'Password'} error={errors.password}>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must be at least 6 characters',
                                },
                            })}
                            className={`p-2 border border-box rounded-md w-75 ${errors.password ? 'border-red-500' : 'border-gray-200'} `}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                        />
                    </Field>
                </FieldSet>

                <FieldSet label={'Enter social Handles'}>
                    {fields.map((field, index) => {
                        return (
                            <div
                                key={field.id}
                                className="flex justify-between items-center w-max "
                            >
                                <Field label={'Social Name'}>
                                    <input
                                        {...register(`socials[${index}].name`)}
                                        className="p-2 border box-border w-full rounded-md"
                                        type="text"
                                        name=""
                                        id={`socials[${index}].name`}
                                    />
                                </Field>

                                <Field label={'Social URL'}>
                                    <input
                                        {...register(`socials[${index}].url`)}
                                        className="p-2 border box-border w-full rounded-md"
                                        type="text"
                                        name={`socials[${index}].url`}
                                        id={`socials[${index}].url`}
                                    />
                                </Field>
                                <button
                                    onClick={() => remove(index)}
                                    className="mt-8 mr-2 text-2xl cursor-pointer"
                                >
                                    &#8722;
                                </button>
                            </div>
                        );
                    })}
                    <button
                        className="p-2 mt-2 border border-box rounded-lg  bg-gray-500 text-white cursor-pointer"
                        onClick={() => append({ name: '', url: '' })}
                    >
                        Add a social handle
                    </button>
                </FieldSet>
                <Field>
                    <button className="text-md text-white px-2 py-1 border rounded-lg cursor-pointer bg-purple-500 m-auto">
                        Register
                    </button>
                </Field>
            </form>
        </div>
    );
};

export default RegistrationForm;
