// _runtime/10504_Layouts.js
import normalLayout from "10505_normalLayout.js";
import parallaxLayout from "10506_parallaxLayout.js";
import horizontalStackLayout from "10507_horizontalStackLayout.js";

({
  normal: normalLayout.normalLayout,
  parallax: parallaxLayout.parallaxLayout,
  horizontalStack: horizontalStackLayout.horizontalStackLayout,
  verticalStack: horizontalStackLayout.verticalStackLayout,
});

export const Layouts = {
  normal: normalLayout.normalLayout,
  parallax: parallaxLayout.parallaxLayout,
  horizontalStack: horizontalStackLayout.horizontalStackLayout,
  verticalStack: horizontalStackLayout.verticalStackLayout,
};
