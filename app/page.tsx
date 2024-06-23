"use client"

import { supabase } from "@/utils/supabase";

export default function Home() {
  async function getUserDataHandler() {
    const { data: { user } } = await supabase.auth.getUser()

    console.log(user)
  }

  async function registerHandler() {
    let { data, error } = await supabase.auth.signUp({
      email: 'test@example.com',
      password: 'Password123'
    })

    console.log(data)
    console.log(error)
  }

  async function loginHandler() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: 'test@example.com',
      password: 'Password123'
    })

    console.log(data)
    console.log(error)
  }

  async function logoutHandler() {
    let { error } = await supabase.auth.signOut({ scope: 'local' })

    console.log(error)
  }

  async function getDataHandler() {
    let { data, error } = await supabase.from('data').select()

    console.log(data)
    console.log(error)
  }

  async function insertDataHandler() {
    let { error } = await supabase.from('data').insert({ data: "some text with data" })

    console.log(error)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">My app</h1>
      <div className="flex flex-col items-start w-fit">
        <button onClick={() => getUserDataHandler()}>Get user data</button>
        <button onClick={() => registerHandler()}>Register</button>
        <button onClick={() => loginHandler()}>Login</button>
        <button onClick={() => logoutHandler()}>Logout</button>
        <button onClick={() => getDataHandler()}>Get data</button>
        <button onClick={() => insertDataHandler()}>Insert data</button>
      </div>
    </div>
  );
}
