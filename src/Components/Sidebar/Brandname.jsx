import React from 'react'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'

const Brandname = () => {
  return (

    <Stack spacing={1} direction="row" sx={{marginTop:"50px"}} >
    <Typography
      color="white"
      fontWeight="bold"
      variant="h5"
      sx={{
        marginBottom: 3,
        marginLeft: 5,
        backgroundColor: "#FF9900",
        borderRadius: "9px",
        paddingX: "8px",
        paddingY: "3px",
      }}
    >
      A
    </Typography>
    <Typography
      color="white"
      fontWeight="bold"
      variant="h5"
      sx={{ marginBottom: 3, marginLeft: 5, padding: "4px" }}
    >
      Akademi
    </Typography>
  </Stack>
 
 
 
    
  )
}

export default Brandname
