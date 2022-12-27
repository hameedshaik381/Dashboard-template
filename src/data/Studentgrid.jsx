import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import {Typography,Stack,Link} from "@mui/material";
import { indigo } from "@mui/material/colors"
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const color1 = indigo[300];
const color2 = indigo[500];
export const studentColumns = [

    {
      field: 'col1', editable: true, headerName: 'Name', width: 180, renderCell: (params) => {
        return (<Box display="flex">
          <Avatar src={{ width: 10, height: 10 }} />
          <Typography padding={1} fontWeight="bold" fontSize="12px" >{params.row.col1}</Typography></Box>)
      }
    },
    {
      field: 'col2', editable: true, headerName: 'id', width: 120, renderCell: (params) => {
        return (
  
          <Typography padding={1} fontWeight="bold" fontSize="12px" >{params.row.col2}</Typography>)
      }
    },
    {
      field: 'col3', headerName: 'Date', width: 120, renderCell: (params) => {
        return (
  
          <Typography padding={1} fontWeight="100" color="grey" fontSize="10px" >{params.row.col3}</Typography>)
      }
    },
    {
      field: 'col4', headerName: 'Parent name', width: 150, renderCell: (params) => {
        return (
  
          <Typography padding={1} fontSize="12px" >{params.row.col4}</Typography>)
      }
    },
    { field: 'col5', headerName: 'city', width: 90 },
    {
      field: 'download', headerName: 'Contact', width: 100, renderCell: (params) => {
        return (<Stack direction="row" spacing={2}>
          <Link href="#" sx={{ padding: "5px", backgroundColor: { color1 }, color: { color2 }, borderRadius: "25px" }}><CallIcon sx={{ fontSize: "15px" }} /></Link>
          <Link href="#" sx={{ padding: "5px", backgroundColor: { color1 }, color: { color2 }, borderRadius: "25px" }}><MailOutlineIcon sx={{ fontSize: "15px" }} /></Link>
        </Stack>)
      }
    },
    {
      field: 'col7', headerName: 'Grade', width: 60, headerAlign: 'center', renderCell: (params) => {
        return (
  
          <Typography padding={1} color="warning" borderRadius="20px" fontWeight="bold" fontSize="12px" >{params.row.col7}</Typography>)
      }
    },
    { field: 'col8', headerName: 'Action', headerAlign: 'center', width: 60, renderCell: () => <Stack direction="row" spacing={2}><MoreHorizIcon /></Stack> },
  
  ];
  export const columnGroupingModel = [
    {
      groupId: 'internal data',
      children: [{ field: 'id' }],
    },
    {
      groupId: 'character',
      children: [
        {
          groupId: 'naming',
          children: [{ field: 'lastName' }, { field: 'firstName' }],
        },
        { field: 'age' },
      ],
    },
  ]
  export const studentRows =[
    { id: 1, col1: 'Samantha william', col2: '#123456789', col3: 'March 25,2021', col4: "Amanda William", col5: "jakarta", col7: "VIIA" },
    { id: 2, col1: 'Tony Soap', col2: '#123456789', col3: 'March 25,2021', col4: "Geaorge Soap", col5: "jakarta", col7: "VIIB" },
    { id: 3, col1: 'Karen Hope', col2: '#123456789', col3: 'March 25,2021', col4: "Shai Hope", col5: "jakarta", col7: "VIIC" },
    { id: 4, col1: 'Jordan Nico', col2: '#123456789', col3: 'March 25,2021', col4: "Lauren Nico", col5: "jakarta", col7: "VIID" },
    { id: 5, col1: 'Nadila Adja', col2: '#123456789', col3: 'March 25,2021', col4: "Shamila adja", col5: "jakarta", col7: "VIIE" },
  ];
  