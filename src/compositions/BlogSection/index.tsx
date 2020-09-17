import React from 'react'
import Box from 'components/Box'
import Text from 'components/Text'
import Heading from 'components/Heading'
import Link from 'components/Link'
import Image from 'components/Image'
import FeatureBlock from 'components/FeatureBlock'
import data from 'common/data'
import Container from 'components/UI/Container'
import BlogSectionWrapper from './blogSection.style'

type BlogSectionProps = {
  sectionHeader?: object
  row?: object
  col?: object
  sectionTitle?: object
  sectionSubTitle?: object
  blogTitle?: object
  blogMeta?: object
}
const BlogSection: React.SFC<BlogSectionProps> = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  blogTitle,
  blogMeta,
}) => {
  return (
    <BlogSectionWrapper id='blogSection'>
      <Container>
        <Box {...sectionHeader}>
          <Text content='PORTFOLIO' {...sectionSubTitle} />
          <Heading
            content='Meet our work experience from customers'
            {...sectionTitle}
          />
        </Box>
        <Box className='row' {...row}>
          {data.blog.map((post, index) => (
            <FeatureBlock
              key={`post_key-${index}`}
              id={`post_id-${post.id}`}
              className='blog__post'
              icon={
                <Image
                  src={post.thumbnail_url}
                  alt={`Blog Image ${post.id}`}
                  className='blog__image'
                />
              }
              title={
                <Link href={post.postLink} {...blogTitle}>
                  {post.title}
                </Link>
              }
              description={<Text content={post.date} {...blogMeta} />}
            />
          ))}
        </Box>
      </Container>
    </BlogSectionWrapper>
  )
}

export default BlogSection
