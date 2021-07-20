import React from 'react'

const home: React.FC = () => {
    return (
        <div style={{
            background:'linear-gradient(mediumpurple, violet, white, white)',
            height: '90vh'
        }}>
            <div className="typo-main" style={{
                textAlign: 'center',
                lineHeight: '75vh',
                fontSize: '32pt',
                fontFamily: 'fantasy',
                textShadow: '2px 2px 4px gray'
            }}>
                7 UI/UX Designs (2021. 07.)
            </div>
        </div>
    )
}

export default home