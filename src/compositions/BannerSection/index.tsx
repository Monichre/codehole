import React, { Fragment } from 'react'
import Box from 'components/Box'
import Text from 'components/Text'
import Heading from 'components/Heading'
import Button from 'components/Button'
import FeatureBlock from 'components/FeatureBlock'
import Container from 'components/UI/Container'
import Particles from '../Particle'
import BannerWrapper, { DiscountLabel } from './bannerSection.style'
type BannerSectionProps = {
  title?: object
  btnStyle?: object
  description?: object
  contentStyle?: object
  discountText?: object
  discountAmount?: object
  outlineBtnStyle?: object
}
const BannerSection: React.SFC<BannerSectionProps> = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title='LEARN MORE' {...btnStyle} />
      <Button
        title='WATCH WORKS'
        variant='textButton'
        icon={<i className='flaticon-next' />}
        {...outlineBtnStyle}
      />
    </Fragment>
  )
  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <Box className='row' {...row}>
          <Box className='col' {...col}>
            <DiscountLabel>
              <Text content='25% Discount' {...discountAmount} />
              <Text content='on every first project budget' {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading
                  content='The life so short, the craft so long to learn'
                  {...title}
                />
              }
              description={
                <Text
                  content='Learn always, lead when neccessary'
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  )
}

export default BannerSection
