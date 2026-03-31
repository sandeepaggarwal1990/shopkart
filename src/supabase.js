import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://exscqwyzlkugjphyyfqf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c2Nxd3l6bGt1Z2pwaHl5ZnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5Mjc2MTcsImV4cCI6MjA5MDUwMzYxN30.9Uf-xOsxoHXcRZRVUkEi739C_1jpR1s7C2aZ7lgx4oI'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
