import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { studentColumns, studentRows } from "../../data/Studentgrid";

export default function Student() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={studentRows}
        columns={studentColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
