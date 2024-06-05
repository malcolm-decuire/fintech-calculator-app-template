import { Box } from '@mui/material'
import React from 'react'
import Button from './Button'

const Navigation = () => {
  return (
    <Box className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 mb-6">
      <Button className="mr-4 rounded-[10px] bg-blue-500" href="/">Calculator 1</Button>
      <Button className="mr-4 rounded-[10px] bg-blue-500" href="/calculator2">Calculator 2</Button>
    </Box>
  )
}

export default Navigation