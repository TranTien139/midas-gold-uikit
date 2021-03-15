import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <defs>
        <image  width="24" height="24" id="img5" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADGCAMAAACpZ5+mAAAAAXNSR0IB2cksfwAAAuVQTFRF////ycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUycTUwo/N8AAAAPd0Uk5TAAAaYaXO07l6LQRRz//xljlj8++dMzzs44MYAqbSVzLl/J8nWtgHcKgjatFFWP5uBUP0nhY97b8pO+vW4Uc6YAH6dEL5aU9eS3LoiKTJHcWnCyXm6jdxxw9/FzBK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"/>
      </defs>
      <use id="Background" href="#img5" x="0" y="0" />
    </Svg>
  );
};

export default Icon;
