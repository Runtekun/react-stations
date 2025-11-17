// @ts-check
import React from "react";

/**
 * @type { (props: {imageUrl: string}) => JSX.Element }
 */

export const DogImage = ({imageUrl}) => {
  return (
    <img
      src={imageUrl}
      alt="かわいい犬の画像"
    />
  )
}

export default DogImage
