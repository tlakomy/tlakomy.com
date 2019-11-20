import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Tomasz is a Senior Frontend Engineer @{" "}
    <Styled.a href="https://www.olxgroup.com/">OLX Group</Styled.a>, tech
    speaker,{" "}
    <Styled.a href="https://egghead.io/instructors/tomasz-lakomy?af=6p5abz">
      egghead.io
    </Styled.a>{" "}
    instructor and a ... jQuery evangelist
  </Fragment>
)
