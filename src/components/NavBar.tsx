import React from "react"
import { IconButton } from "@fluentui/react/lib/Button"
import { IButtonStyles, Layer, Text, FontWeights, Panel, getTheme } from "@fluentui/react"
import { useBoolean } from "@fluentui/react-hooks"

const theme = getTheme()

interface NavbarProps {
    layerHostId: string
}
const NavBar = (props: NavbarProps) => {
    const [isPanelOpen, { setTrue: showPanel, setFalse: dismissPanel }] = useBoolean(false)

    const iconStyles: IButtonStyles = {
        root: {
            fontSize: 16,
            fontWeight: FontWeights.regular,
        },
    }

    return (
        <div>
            <Layer hostId={props.layerHostId} >
                <header className="flex justify-between items-center p-4" style={{ boxShadow: theme.effects.elevation8 }}>
                    <div className="flex items-center">
                        <img
                            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
                            alt="tailwindcss logo"
                            className="h-8 w-8"
                        />
                        <h1 className="ml-2 text-2xl">Tailwind CSS</h1>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="mr-4" > Components </a>
                        <a href="#" className="mr-4" > Plugins </a>
                    </div>
                    <div className="float-right flex items-center">
                        <Text className="mr-3">SON HONG MAI</Text>
                        <IconButton iconProps={{ iconName: "People" }} onClick={showPanel} styles={iconStyles} title="Account" ariaLabel="Account" aria-hidden={false} />
                    </div>
                </header>


            </Layer >

            {isPanelOpen && (
                <Panel
                    isOpen
                    hasCloseButton
                    headerText="Options"
                    onDismiss={dismissPanel}
                >
                </Panel>
            )}
        </div >
    )
}

export default NavBar