import React from 'react'
import Text from '../../Text'
import Link from '../../Link'
import Image from '../../Image'
type LogoProps = {
  logoSrc?: string
  title: string
  logoWrapperStyle?: object
  logoStyle?: object
  titleStyle?: object
  withAchor?: boolean
  anchorProps?: object
}
const Logo: React.SFC<LogoProps> = ({
  logoWrapperStyle = { width: '200px' },
  logoStyle = { height: '100%', width: '100%', objectFit: 'contain' },
  titleStyle,
  withAchor,
  anchorProps,
  logoSrc,
  title,
  ...props
}) => (
  <Link {...props} {...logoWrapperStyle}>
    {withAchor ? (
      <a {...anchorProps}>
        {logoSrc ? (
          <Image src={logoSrc} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </a>
    ) : (
      <>
        {logoSrc ? (
          <Image src={logoSrc} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </>
    )}
  </Link>
)

export default Logo
