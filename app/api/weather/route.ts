import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=36.1585&longitude=-81.1526&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=America/New_York'
    )
    
    if (!res.ok) {
      throw new Error('Weather API failed')
    }
    
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 })
  }
}
