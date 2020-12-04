import React from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import { FcDownload } from 'react-icons/fc'

class Export extends React.Component {
    /*constructor(props) {
        super(props)
        this.state = [format, setFormat]
    }

    handleChange(e) {
        setFormat(e.target.value)
    }*/

    toPdf = () => {
        //var doc = {value: 'a4' ? new jsPDF('l', 'mm', 'a4', true) : new jsPDF('l', 'mm', 'a3', true)}
        const quality = 1
        html2canvas(document.getElementById('exportable'),
            { scale: quality }
        ).then(canvas => {
            const doc = new jsPDF('l', 'mm', 'a4')
            doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 10, 298, 130)
            doc.save("download.pdf")
        })
    }

    render() {
        return (
            <div /*name="options" value={this.state.value} handleChange={this.handleChange}*/
                style={{ float: "right" }}>
                <span style={{ fontSize: "20px" }}>Format : </span>
                <FormControl>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select">
                        <MenuItem value={4}>A4</MenuItem>
                        <MenuItem value={3}>A3</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={this.toPdf}
                    variant="outlined"
                    color="primary"
                    startIcon={<FcDownload />}>
                    Exporter
                </Button>
            </div>
        )
    }
}

export default Export