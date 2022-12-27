import { DataGrid } from "@mui/x-data-grid";
import { Box, Stack, Avatar, Typography, Link, Button } from "@mui/material";

import { indigo } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  studentRows,
  studentColumns,
  columnGroupingModel,
} from "../../data/Studentgrid.jsx";

const Students = () => {
  return (
    <Box sx={{ height: 400, width: "73vw" }}>
      <Box display="flex" justifyContent="space-between" p={3}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 240,
            borderRadius: "20px",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            inputProps={{ "aria-label": "search here" }}
          />
        </Paper>

        <Stack direction="row" spacing={3}>
          <Button
            sx={{
              borderRadius: "20px",
            }}
            variant="outlined"
            endIcon={<ArrowDropDownIcon />}
          >
            Newest
          </Button>
          <Button
            sx={{
              borderRadius: "20px",
            }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            New student
          </Button>
        </Stack>
      </Box>

      <DataGrid
        columnGroupingModel={columnGroupingModel}
        experimentalFeatures={{ columnGrouping: true, newEditingApi: true }}
        rows={studentRows}
        columns={studentColumns}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={5}
        onPageSizeChange={10}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          boxShadow: 2,
          backgroundColor: "white",
          color: "primary.main",
          border: 0,
          borderRadius: "15px",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.dark",
          },
        }}
      />
    </Box>
  );
};
export default Students;
