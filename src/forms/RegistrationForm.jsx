import { useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

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
                        <input {...register('id', {
                            required: 'ID is required',
                            max: {
                                value: 1000,
                                message:"Your id must be 1 to 1000"
                            }
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
                <Field>
                    <button className="text-md text-white px-2 py-1 border rounded-lg cursor-pointer bg-purple-500 m-2">
                        Register
                    </button>
                </Field>
            </form>
        </div>
    );
};

export default RegistrationForm;
