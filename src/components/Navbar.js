import React from 'react'
import { Menu, MenuItem , Alignments  } from "react-foundation"
import '../styles/foundation.css'


export default function Navbar(props) {

    const { pages = [], currentPage, setCurrentPage } = props

    return (
        <nav className="nav">
            <h3>Joanna Christian</h3>
            <Menu className="menu" alignment={Alignments.CENTER} isExpanded>
                
                {pages.map((page) => (
                    <MenuItem isSimple
                        key={page.name}
                    >
                        <span
                            onClick={() => setCurrentPage(page)}> {page.name}
                        </span>
                    </MenuItem>
                ))}
            </Menu>
        </nav>
    )
}
