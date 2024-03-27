import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

import { HeadlineFontProps } from '../../Utils/fontProps'
import { HoverableFrame, HoverableTextFrame, LogoFrame } from '../../Utils/Frames'
import openLink from '../../Utils/openLink'
import calcMaxWidth from '../../Utils/calcMaxWidth'
import { logos } from '../../../data'

const ContactPage = ({ pageOffset = 0 }) => {

    const { viewport } = useThree()
    const { width, height } = viewport

    return <>
        <group position={[0, pageOffset, 0]}>

            <Text {...HeadlineFontProps}
                position={[0, -0.5, 0]}
            >
                {"{ CONTACT }"}
            </Text >


            <group scale={calcMaxWidth(width) / 3 > 0.45 ? 0.45 : calcMaxWidth(width) / 3} position={[0, -height / 2 + 1, 0]}>
                {logos.map(({ position, imgUrl, link }, i) =>
                    <HoverableFrame alwaysActive changeColor key={i} position={position}
                        onClick={() => openLink(link)}>
                        <planeGeometry args={[1, 1]} />
                        <LogoFrame
                            url={imgUrl}
                            scale={0.45}
                        />
                    </HoverableFrame>)
                }
            </group>

            <HoverableTextFrame alwaysActive width={5} height={2} position={[0, -height / 2, 0]}
                onClick={() => openLink("/pdfs/CV.pdf")}
            >
                <Text {...HeadlineFontProps}
                    fontSize={0.15}
                >
                    {" >  My  CV  < "}
                </Text >
            </HoverableTextFrame>


            <Text {...HeadlineFontProps}
                position={[0, -height / 1.4, 0]}
            >
                {"{ { END } }"}
            </Text >

        </group>
    </>
}

export default ContactPage