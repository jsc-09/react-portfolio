import React from 'react'
import { Menu, MenuItem , Alignments } from "react-foundation"

export default function Navbar(props) {

    const { pages = [], currentPage, setCurrentPage } = props

    return (
        <nav>
            <h3>JOANNA CHRISTIAN</h3>

            <Menu className="menu" alignment={Alignments.CENTER} isExpanded>
                {pages.map((page) => (
                    <MenuItem 
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
