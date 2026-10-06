// _runtime/10517_Layouts.js
import normalLayout from "10518_normalLayout.js";
import parallaxLayout from "10519_parallaxLayout.js";
import horizontalStackLayout from "10520_horizontalStackLayout.js";

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
