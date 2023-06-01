import { useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better errors (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

export default function Forms() {
  const { register } = useForm();
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input {...register("submit")} type="submit" value={"Create Account"} />
    </form>
  );
}
