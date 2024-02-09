import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import './InterfaceTable.css';
import { deleteInterface, fetchData } from '../../api';

interface RowData {
    id: number;
    name: string;
    CPU: string;
    RAM: string;
}

interface Props {
    data: RowData[];
}

const InterfaceTable = ({data}: Props) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteInterface(id);
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
    <>
        <TableContainer component={Paper} className="tableContainer">
            <Table className="table">
            <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>CPU</TableCell>
                <TableCell>RAM</TableCell>
                <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.CPU}</TableCell>
                    <TableCell>{row.RAM}</TableCell>
                    <TableCell>
                        <DeleteIcon cursor="pointer" onClick={() => handleDelete(row.id)}/>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
      </TableContainer>
      <TablePagination
            className="tablePagination"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>
    );

};

export default InterfaceTable;

