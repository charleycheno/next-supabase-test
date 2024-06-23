import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eairauklnrffrdnymanp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaXJhdWtsbnJmZnJkbnltYW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MDk1OTAsImV4cCI6MjAzNDQ4NTU5MH0.YmFUxboYz9HHa6Y1KbmDk6LRZWXCWmbhhI9DhKKl46s"

export const supabase = createClient(supabaseUrl, supabaseKey)