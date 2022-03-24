// Importacines externas / Own modules

import { FC } from "react"

// Importaciones Internas / Next modules

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0, 0, 0 , 0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3 style={{color:'#fff'}}>Darak Mode</h3>
        <div>
        { children }
        </div>
    </div>
  )
}
