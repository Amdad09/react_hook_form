import { useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm();

    const submitForm = (formData) => {
        console.log(formData);
        const user = {
            email: 'amdadulhaque601671@gmail.com',
            password:123456
        }
        const found = formData.email === user.email && formData.password === formData.password;
        if (!found) {
            setError('root.random', {
                message: `User with email ${formData.email} is not found`,
                type: 'random'
            })
        }

    };
    return (
        <div className="flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label={'Enter login details'}>
                    <Field label={'E-mail'} error={errors.email}>
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
                            className={`p-2 border border-box rounded-md w-75 ${errors.password ? 'border-red-500' : 'border-gray-200'} border-gray-200`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                        />
                    </Field>
                </FieldSet>
                <div className='text-red-500'>{ errors?.root?.random?.message }</div>
                <Field>
                    <button className="text-md text-white px-2 py-1 border rounded-lg cursor-pointer bg-purple-500 m-2">
                        Login
                    </button>
                </Field>
            </form>
        </div>
    );
};

export default LoginForm;
