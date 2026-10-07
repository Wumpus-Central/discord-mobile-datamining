// === Module 13746: badges/GuildBadge ===

// Module 13746 (badges/GuildBadge)
import c from "c" /* 576 */;
import GuildBadgeSword from "GuildBadgeSword" /* 13747 */;
import GuildBadgeWaterDrop from "GuildBadgeWaterDrop" /* 13750 */;
import GuildBadgeSkull from "GuildBadgeSkull" /* 13751 */;
import GuildBadgeToadstool from "GuildBadgeToadstool" /* 13752 */;
import GuildBadgeMoon from "GuildBadgeMoon" /* 13753 */;
import GuildBadgeLightning from "GuildBadgeLightning" /* 13754 */;
import GuildBadgeLeaf from "GuildBadgeLeaf" /* 13755 */;
import GuildBadgeHeart from "GuildBadgeHeart" /* 13756 */;
import GuildBadgeFire from "GuildBadgeFire" /* 13757 */;
import GuildBadgeCompass from "GuildBadgeCompass" /* 13758 */;
import GuildBadgeCrosshairs from "GuildBadgeCrosshairs" /* 13759 */;
import GuildBadgeFlower from "GuildBadgeFlower" /* 13760 */;
import GuildBadgeForce from "GuildBadgeForce" /* 13761 */;
import GuildBadgeGem from "GuildBadgeGem" /* 13762 */;
import GuildBadgeLava from "GuildBadgeLava" /* 13763 */;
import GuildBadgePsychic from "GuildBadgePsychic" /* 13764 */;
import GuildBadgeSmoke from "GuildBadgeSmoke" /* 13765 */;
import GuildBadgeSnow from "GuildBadgeSnow" /* 13766 */;
import GuildBadgeSound from "GuildBadgeSound" /* 13767 */;
import GuildBadgeSun from "GuildBadgeSun" /* 13768 */;
import GuildBadgeWind from "GuildBadgeWind" /* 13769 */;
import GuildBadgeBunny from "GuildBadgeBunny" /* 13770 */;
import GuildBadgeDog from "GuildBadgeDog" /* 13771 */;
import GuildBadgeFrog from "GuildBadgeFrog" /* 13772 */;
import GuildBadgeGoat from "GuildBadgeGoat" /* 13773 */;
import GuildBadgeCat from "GuildBadgeCat" /* 13774 */;
import GuildBadgeDiamond from "GuildBadgeDiamond" /* 13775 */;
import GuildBadgeCrown from "GuildBadgeCrown" /* 13776 */;
import GuildBadgeTrophy from "GuildBadgeTrophy" /* 13777 */;
import GuildBadgeMoneyBag from "GuildBadgeMoneyBag" /* 13778 */;
import GuildBadgeDollarSign from "GuildBadgeDollarSign" /* 13779 */;
import GuildBadgeClover from "GuildBadgeClover" /* 13780 */;
import GuildBadgeBlossom from "GuildBadgeBlossom" /* 13781 */;
import GuildBadgePottedPlant from "GuildBadgePottedPlant" /* 13782 */;
import GuildBadgeMaple from "GuildBadgeMaple" /* 13783 */;
import GuildBadgeWiltedFlower from "GuildBadgeWiltedFlower" /* 13784 */;
import GuildBadgeButterfly from "GuildBadgeButterfly" /* 13785 */;
import GuildBadgeSnail from "GuildBadgeSnail" /* 13786 */;
import GuildBadgeCaterpillar from "GuildBadgeCaterpillar" /* 13787 */;
import GuildBadgeSpider from "GuildBadgeSpider" /* 13788 */;
import GuildBadgeBee from "GuildBadgeBee" /* 13789 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["badge", "primaryTintColor", "secondaryTintColor"];
const GuildTagBadgeKind = fn(7614).GuildTagBadgeKind;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(151);
  if (cResult[0] !== arg0) {
    ({ badge, primaryTintColor, secondaryTintColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = badge;
    cResult[2] = primaryTintColor;
    cResult[3] = tmp10;
    cResult[4] = secondaryTintColor;
    let tmp7 = secondaryTintColor;
    let tmp6 = tmp10;
    let tmp5 = primaryTintColor;
    let tmp4 = badge;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (GuildTagBadgeKind.SWORD === tmp4) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp253 = cResult[8];
        }
        return tmp253;
      }
    }
    const obj2 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged = Object.assign(tmp6);
    const tmp258 = jsx(GuildBadgeSword.GuildBadgeSword, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp7;
    cResult[8] = tmp258;
    tmp253 = tmp258;
  } else if (GuildTagBadgeKind.WATER_DROP === tmp4) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp6) {
        let tmp247 = cResult[11];
      }
      return tmp247;
    }
    const obj3 = { primaryTintColor: tmp5 };
    const merged1 = Object.assign(tmp6);
    const tmp252 = jsx(GuildBadgeWaterDrop.GuildBadgeWaterDrop, { primaryTintColor: tmp5 });
    cResult[9] = tmp5;
    cResult[10] = tmp6;
    cResult[11] = tmp252;
    tmp247 = tmp252;
  } else if (GuildTagBadgeKind.SKULL === tmp4) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp6) {
        let tmp241 = cResult[14];
      }
      return tmp241;
    }
    const obj4 = { primaryTintColor: tmp5 };
    const merged2 = Object.assign(tmp6);
    const tmp246 = jsx(GuildBadgeSkull.GuildBadgeSkull, { primaryTintColor: tmp5 });
    cResult[12] = tmp5;
    cResult[13] = tmp6;
    cResult[14] = tmp246;
    tmp241 = tmp246;
  } else if (GuildTagBadgeKind.TOADSTOOL === tmp4) {
    if (cResult[15] === tmp5) {
      if (cResult[16] === tmp6) {
        if (cResult[17] === tmp7) {
          let tmp235 = cResult[18];
        }
        return tmp235;
      }
    }
    const obj5 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged3 = Object.assign(tmp6);
    const tmp240 = jsx(GuildBadgeToadstool.GuildBadgeToadstool, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[15] = tmp5;
    cResult[16] = tmp6;
    cResult[17] = tmp7;
    cResult[18] = tmp240;
    tmp235 = tmp240;
  } else if (GuildTagBadgeKind.MOON === tmp4) {
    if (cResult[19] === tmp5) {
      if (cResult[20] === tmp6) {
        let tmp229 = cResult[21];
      }
      return tmp229;
    }
    const obj6 = { primaryTintColor: tmp5 };
    const merged4 = Object.assign(tmp6);
    const tmp234 = jsx(GuildBadgeMoon.GuildBadgeMoon, { primaryTintColor: tmp5 });
    cResult[19] = tmp5;
    cResult[20] = tmp6;
    cResult[21] = tmp234;
    tmp229 = tmp234;
  } else if (GuildTagBadgeKind.LIGHTNING === tmp4) {
    if (cResult[22] === tmp5) {
      if (cResult[23] === tmp6) {
        let tmp223 = cResult[24];
      }
      return tmp223;
    }
    const obj7 = { primaryTintColor: tmp5 };
    const merged5 = Object.assign(tmp6);
    const tmp228 = jsx(GuildBadgeLightning.GuildBadgeLightning, { primaryTintColor: tmp5 });
    cResult[22] = tmp5;
    cResult[23] = tmp6;
    cResult[24] = tmp228;
    tmp223 = tmp228;
  } else if (GuildTagBadgeKind.LEAF === tmp4) {
    if (cResult[25] === tmp5) {
      if (cResult[26] === tmp6) {
        let tmp217 = cResult[27];
      }
      return tmp217;
    }
    const obj8 = { primaryTintColor: tmp5 };
    const merged6 = Object.assign(tmp6);
    const tmp222 = jsx(GuildBadgeLeaf.GuildBadgeLeaf, { primaryTintColor: tmp5 });
    cResult[25] = tmp5;
    cResult[26] = tmp6;
    cResult[27] = tmp222;
    tmp217 = tmp222;
  } else if (GuildTagBadgeKind.HEART === tmp4) {
    if (cResult[28] === tmp5) {
      if (cResult[29] === tmp6) {
        let tmp211 = cResult[30];
      }
      return tmp211;
    }
    const obj9 = { primaryTintColor: tmp5 };
    const merged7 = Object.assign(tmp6);
    const tmp216 = jsx(GuildBadgeHeart.GuildBadgeHeart, { primaryTintColor: tmp5 });
    cResult[28] = tmp5;
    cResult[29] = tmp6;
    cResult[30] = tmp216;
    tmp211 = tmp216;
  } else if (GuildTagBadgeKind.FIRE === tmp4) {
    if (cResult[31] === tmp5) {
      if (cResult[32] === tmp6) {
        let tmp205 = cResult[33];
      }
      return tmp205;
    }
    const obj10 = { primaryTintColor: tmp5 };
    const merged8 = Object.assign(tmp6);
    const tmp210 = jsx(GuildBadgeFire.GuildBadgeFire, { primaryTintColor: tmp5 });
    cResult[31] = tmp5;
    cResult[32] = tmp6;
    cResult[33] = tmp210;
    tmp205 = tmp210;
  } else if (GuildTagBadgeKind.COMPASS === tmp4) {
    if (cResult[34] === tmp5) {
      if (cResult[35] === tmp6) {
        if (cResult[36] === tmp7) {
          let tmp199 = cResult[37];
        }
        return tmp199;
      }
    }
    const obj11 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged9 = Object.assign(tmp6);
    const tmp204 = jsx(GuildBadgeCompass.GuildBadgeCompass, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[34] = tmp5;
    cResult[35] = tmp6;
    cResult[36] = tmp7;
    cResult[37] = tmp204;
    tmp199 = tmp204;
  } else if (GuildTagBadgeKind.CROSSHAIRS === tmp4) {
    if (cResult[38] === tmp5) {
      if (cResult[39] === tmp6) {
        if (cResult[40] === tmp7) {
          let tmp193 = cResult[41];
        }
        return tmp193;
      }
    }
    const obj12 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged10 = Object.assign(tmp6);
    const tmp198 = jsx(GuildBadgeCrosshairs.GuildBadgeCrosshairs, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[38] = tmp5;
    cResult[39] = tmp6;
    cResult[40] = tmp7;
    cResult[41] = tmp198;
    tmp193 = tmp198;
  } else if (GuildTagBadgeKind.FLOWER === tmp4) {
    if (cResult[42] === tmp5) {
      if (cResult[43] === tmp6) {
        if (cResult[44] === tmp7) {
          let tmp187 = cResult[45];
        }
        return tmp187;
      }
    }
    const obj13 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged11 = Object.assign(tmp6);
    const tmp192 = jsx(GuildBadgeFlower.GuildBadgeFlower, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[42] = tmp5;
    cResult[43] = tmp6;
    cResult[44] = tmp7;
    cResult[45] = tmp192;
    tmp187 = tmp192;
  } else if (GuildTagBadgeKind.FORCE === tmp4) {
    if (cResult[46] === tmp5) {
      if (cResult[47] === tmp6) {
        if (cResult[48] === tmp7) {
          let tmp181 = cResult[49];
        }
        return tmp181;
      }
    }
    const obj14 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged12 = Object.assign(tmp6);
    const tmp186 = jsx(GuildBadgeForce.GuildBadgeForce, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[46] = tmp5;
    cResult[47] = tmp6;
    cResult[48] = tmp7;
    cResult[49] = tmp186;
    tmp181 = tmp186;
  } else if (GuildTagBadgeKind.GEM === tmp4) {
    if (cResult[50] === tmp5) {
      if (cResult[51] === tmp6) {
        if (cResult[52] === tmp7) {
          let tmp175 = cResult[53];
        }
        return tmp175;
      }
    }
    const obj15 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged13 = Object.assign(tmp6);
    const tmp180 = jsx(GuildBadgeGem.GuildBadgeGem, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[50] = tmp5;
    cResult[51] = tmp6;
    cResult[52] = tmp7;
    cResult[53] = tmp180;
    tmp175 = tmp180;
  } else if (GuildTagBadgeKind.LAVA === tmp4) {
    if (cResult[54] === tmp5) {
      if (cResult[55] === tmp6) {
        if (cResult[56] === tmp7) {
          let tmp169 = cResult[57];
        }
        return tmp169;
      }
    }
    const obj16 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged14 = Object.assign(tmp6);
    const tmp174 = jsx(GuildBadgeLava.GuildBadgeLava, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[54] = tmp5;
    cResult[55] = tmp6;
    cResult[56] = tmp7;
    cResult[57] = tmp174;
    tmp169 = tmp174;
  } else if (GuildTagBadgeKind.PSYCHIC === tmp4) {
    if (cResult[58] === tmp5) {
      if (cResult[59] === tmp6) {
        if (cResult[60] === tmp7) {
          let tmp163 = cResult[61];
        }
        return tmp163;
      }
    }
    const obj17 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged15 = Object.assign(tmp6);
    const tmp168 = jsx(GuildBadgePsychic.GuildBadgePsychic, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[58] = tmp5;
    cResult[59] = tmp6;
    cResult[60] = tmp7;
    cResult[61] = tmp168;
    tmp163 = tmp168;
  } else if (GuildTagBadgeKind.SMOKE === tmp4) {
    if (cResult[62] === tmp5) {
      if (cResult[63] === tmp6) {
        if (cResult[64] === tmp7) {
          let tmp157 = cResult[65];
        }
        return tmp157;
      }
    }
    const obj18 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged16 = Object.assign(tmp6);
    const tmp162 = jsx(GuildBadgeSmoke.GuildBadgeSmoke, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[62] = tmp5;
    cResult[63] = tmp6;
    cResult[64] = tmp7;
    cResult[65] = tmp162;
    tmp157 = tmp162;
  } else if (GuildTagBadgeKind.SNOW === tmp4) {
    if (cResult[66] === tmp5) {
      if (cResult[67] === tmp6) {
        if (cResult[68] === tmp7) {
          let tmp151 = cResult[69];
        }
        return tmp151;
      }
    }
    const obj19 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged17 = Object.assign(tmp6);
    const tmp156 = jsx(GuildBadgeSnow.GuildBadgeSnow, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[66] = tmp5;
    cResult[67] = tmp6;
    cResult[68] = tmp7;
    cResult[69] = tmp156;
    tmp151 = tmp156;
  } else if (GuildTagBadgeKind.SOUND === tmp4) {
    if (cResult[70] === tmp5) {
      if (cResult[71] === tmp6) {
        if (cResult[72] === tmp7) {
          let tmp145 = cResult[73];
        }
        return tmp145;
      }
    }
    const obj20 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged18 = Object.assign(tmp6);
    const tmp150 = jsx(GuildBadgeSound.GuildBadgeSound, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[70] = tmp5;
    cResult[71] = tmp6;
    cResult[72] = tmp7;
    cResult[73] = tmp150;
    tmp145 = tmp150;
  } else if (GuildTagBadgeKind.SUN === tmp4) {
    if (cResult[74] === tmp5) {
      if (cResult[75] === tmp6) {
        if (cResult[76] === tmp7) {
          let tmp139 = cResult[77];
        }
        return tmp139;
      }
    }
    const obj21 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged19 = Object.assign(tmp6);
    const tmp144 = jsx(GuildBadgeSun.GuildBadgeSun, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[74] = tmp5;
    cResult[75] = tmp6;
    cResult[76] = tmp7;
    cResult[77] = tmp144;
    tmp139 = tmp144;
  } else if (GuildTagBadgeKind.WIND === tmp4) {
    if (cResult[78] === tmp5) {
      if (cResult[79] === tmp6) {
        if (cResult[80] === tmp7) {
          let tmp133 = cResult[81];
        }
        return tmp133;
      }
    }
    const obj22 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged20 = Object.assign(tmp6);
    const tmp138 = jsx(GuildBadgeWind.GuildBadgeWind, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[78] = tmp5;
    cResult[79] = tmp6;
    cResult[80] = tmp7;
    cResult[81] = tmp138;
    tmp133 = tmp138;
  } else if (GuildTagBadgeKind.BUNNY === tmp4) {
    if (cResult[82] === tmp5) {
      if (cResult[83] === tmp6) {
        let tmp127 = cResult[84];
      }
      return tmp127;
    }
    const obj23 = { primaryTintColor: tmp5 };
    const merged21 = Object.assign(tmp6);
    const tmp132 = jsx(GuildBadgeBunny.GuildBadgeBunny, { primaryTintColor: tmp5 });
    cResult[82] = tmp5;
    cResult[83] = tmp6;
    cResult[84] = tmp132;
    tmp127 = tmp132;
  } else if (GuildTagBadgeKind.DOG === tmp4) {
    if (cResult[85] === tmp5) {
      if (cResult[86] === tmp6) {
        if (cResult[87] === tmp7) {
          let tmp121 = cResult[88];
        }
        return tmp121;
      }
    }
    const obj24 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged22 = Object.assign(tmp6);
    const tmp126 = jsx(GuildBadgeDog.GuildBadgeDog, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[85] = tmp5;
    cResult[86] = tmp6;
    cResult[87] = tmp7;
    cResult[88] = tmp126;
    tmp121 = tmp126;
  } else if (GuildTagBadgeKind.FROG === tmp4) {
    if (cResult[89] === tmp5) {
      if (cResult[90] === tmp6) {
        if (cResult[91] === tmp7) {
          let tmp115 = cResult[92];
        }
        return tmp115;
      }
    }
    const obj25 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged23 = Object.assign(tmp6);
    const tmp120 = jsx(GuildBadgeFrog.GuildBadgeFrog, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[89] = tmp5;
    cResult[90] = tmp6;
    cResult[91] = tmp7;
    cResult[92] = tmp120;
    tmp115 = tmp120;
  } else if (GuildTagBadgeKind.GOAT === tmp4) {
    if (cResult[93] === tmp5) {
      if (cResult[94] === tmp6) {
        let tmp109 = cResult[95];
      }
      return tmp109;
    }
    const obj26 = { primaryTintColor: tmp5 };
    const merged24 = Object.assign(tmp6);
    const tmp114 = jsx(GuildBadgeGoat.GuildBadgeGoat, { primaryTintColor: tmp5 });
    cResult[93] = tmp5;
    cResult[94] = tmp6;
    cResult[95] = tmp114;
    tmp109 = tmp114;
  } else if (GuildTagBadgeKind.CAT === tmp4) {
    if (cResult[96] === tmp5) {
      if (cResult[97] === tmp6) {
        let tmp103 = cResult[98];
      }
      return tmp103;
    }
    const obj27 = { primaryTintColor: tmp5 };
    const merged25 = Object.assign(tmp6);
    const tmp108 = jsx(GuildBadgeCat.GuildBadgeCat, { primaryTintColor: tmp5 });
    cResult[96] = tmp5;
    cResult[97] = tmp6;
    cResult[98] = tmp108;
    tmp103 = tmp108;
  } else if (GuildTagBadgeKind.DIAMOND === tmp4) {
    if (cResult[99] === tmp5) {
      if (cResult[100] === tmp6) {
        let tmp97 = cResult[101];
      }
      return tmp97;
    }
    const obj28 = { primaryTintColor: tmp5 };
    const merged26 = Object.assign(tmp6);
    const tmp102 = jsx(GuildBadgeDiamond.GuildBadgeDiamond, { primaryTintColor: tmp5 });
    cResult[99] = tmp5;
    cResult[100] = tmp6;
    cResult[101] = tmp102;
    tmp97 = tmp102;
  } else if (GuildTagBadgeKind.CROWN === tmp4) {
    if (cResult[102] === tmp5) {
      if (cResult[103] === tmp6) {
        if (cResult[104] === tmp7) {
          let tmp91 = cResult[105];
        }
        return tmp91;
      }
    }
    const obj29 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged27 = Object.assign(tmp6);
    const tmp96 = jsx(GuildBadgeCrown.GuildBadgeCrown, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[102] = tmp5;
    cResult[103] = tmp6;
    cResult[104] = tmp7;
    cResult[105] = tmp96;
    tmp91 = tmp96;
  } else if (GuildTagBadgeKind.TROPHY === tmp4) {
    if (cResult[106] === tmp5) {
      if (cResult[107] === tmp6) {
        let tmp85 = cResult[108];
      }
      return tmp85;
    }
    const obj30 = { primaryTintColor: tmp5 };
    const merged28 = Object.assign(tmp6);
    const tmp90 = jsx(GuildBadgeTrophy.GuildBadgeTrophy, { primaryTintColor: tmp5 });
    cResult[106] = tmp5;
    cResult[107] = tmp6;
    cResult[108] = tmp90;
    tmp85 = tmp90;
  } else if (GuildTagBadgeKind.MONEY_BAG === tmp4) {
    if (cResult[109] === tmp5) {
      if (cResult[110] === tmp6) {
        let tmp79 = cResult[111];
      }
      return tmp79;
    }
    const obj31 = { primaryTintColor: tmp5 };
    const merged29 = Object.assign(tmp6);
    const tmp84 = jsx(GuildBadgeMoneyBag.GuildBadgeMoneyBag, { primaryTintColor: tmp5 });
    cResult[109] = tmp5;
    cResult[110] = tmp6;
    cResult[111] = tmp84;
    tmp79 = tmp84;
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === tmp4) {
    if (cResult[112] === tmp5) {
      if (cResult[113] === tmp6) {
        let tmp73 = cResult[114];
      }
      return tmp73;
    }
    const obj32 = { primaryTintColor: tmp5 };
    const merged30 = Object.assign(tmp6);
    const tmp78 = jsx(GuildBadgeDollarSign.GuildBadgeDollarSign, { primaryTintColor: tmp5 });
    cResult[112] = tmp5;
    cResult[113] = tmp6;
    cResult[114] = tmp78;
    tmp73 = tmp78;
  } else if (GuildTagBadgeKind.CLOVER === tmp4) {
    if (cResult[115] === tmp5) {
      if (cResult[116] === tmp6) {
        let tmp67 = cResult[117];
      }
      return tmp67;
    }
    const obj33 = { primaryTintColor: tmp5 };
    const merged31 = Object.assign(tmp6);
    const tmp72 = jsx(GuildBadgeClover.GuildBadgeClover, { primaryTintColor: tmp5 });
    cResult[115] = tmp5;
    cResult[116] = tmp6;
    cResult[117] = tmp72;
    tmp67 = tmp72;
  } else if (GuildTagBadgeKind.BLOSSOM === tmp4) {
    if (cResult[118] === tmp5) {
      if (cResult[119] === tmp6) {
        let tmp61 = cResult[120];
      }
      return tmp61;
    }
    const obj34 = { primaryTintColor: tmp5 };
    const merged32 = Object.assign(tmp6);
    const tmp66 = jsx(GuildBadgeBlossom.GuildBadgeBlossom, { primaryTintColor: tmp5 });
    cResult[118] = tmp5;
    cResult[119] = tmp6;
    cResult[120] = tmp66;
    tmp61 = tmp66;
  } else if (GuildTagBadgeKind.POTTED_PLANT === tmp4) {
    if (cResult[121] === tmp5) {
      if (cResult[122] === tmp6) {
        if (cResult[123] === tmp7) {
          let tmp55 = cResult[124];
        }
        return tmp55;
      }
    }
    const obj35 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged33 = Object.assign(tmp6);
    const tmp60 = jsx(GuildBadgePottedPlant.GuildBadgePottedPlant, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[121] = tmp5;
    cResult[122] = tmp6;
    cResult[123] = tmp7;
    cResult[124] = tmp60;
    tmp55 = tmp60;
  } else if (GuildTagBadgeKind.MAPLE === tmp4) {
    if (cResult[125] === tmp5) {
      if (cResult[126] === tmp6) {
        let tmp49 = cResult[127];
      }
      return tmp49;
    }
    const obj36 = { primaryTintColor: tmp5 };
    const merged34 = Object.assign(tmp6);
    const tmp54 = jsx(GuildBadgeMaple.GuildBadgeMaple, { primaryTintColor: tmp5 });
    cResult[125] = tmp5;
    cResult[126] = tmp6;
    cResult[127] = tmp54;
    tmp49 = tmp54;
  } else if (GuildTagBadgeKind.WILTED_FLOWER === tmp4) {
    if (cResult[128] === tmp5) {
      if (cResult[129] === tmp6) {
        if (cResult[130] === tmp7) {
          let tmp43 = cResult[131];
        }
        return tmp43;
      }
    }
    const obj37 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged35 = Object.assign(tmp6);
    const tmp48 = jsx(GuildBadgeWiltedFlower.GuildBadgeWiltedFlower, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[128] = tmp5;
    cResult[129] = tmp6;
    cResult[130] = tmp7;
    cResult[131] = tmp48;
    tmp43 = tmp48;
  } else if (GuildTagBadgeKind.BUTTERFLY === tmp4) {
    if (cResult[132] === tmp5) {
      if (cResult[133] === tmp6) {
        if (cResult[134] === tmp7) {
          let tmp37 = cResult[135];
        }
        return tmp37;
      }
    }
    const obj38 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged36 = Object.assign(tmp6);
    const tmp42 = jsx(GuildBadgeButterfly.GuildBadgeButterfly, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[132] = tmp5;
    cResult[133] = tmp6;
    cResult[134] = tmp7;
    cResult[135] = tmp42;
    tmp37 = tmp42;
  } else if (GuildTagBadgeKind.SNAIL === tmp4) {
    if (cResult[136] === tmp5) {
      if (cResult[137] === tmp6) {
        if (cResult[138] === tmp7) {
          let tmp31 = cResult[139];
        }
        return tmp31;
      }
    }
    const obj39 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged37 = Object.assign(tmp6);
    const tmp36 = jsx(GuildBadgeSnail.GuildBadgeSnail, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[136] = tmp5;
    cResult[137] = tmp6;
    cResult[138] = tmp7;
    cResult[139] = tmp36;
    tmp31 = tmp36;
  } else if (GuildTagBadgeKind.CATERPILLAR === tmp4) {
    if (cResult[140] === tmp5) {
      if (cResult[141] === tmp6) {
        if (cResult[142] === tmp7) {
          let tmp25 = cResult[143];
        }
        return tmp25;
      }
    }
    const obj40 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged38 = Object.assign(tmp6);
    const tmp30 = jsx(GuildBadgeCaterpillar.GuildBadgeCaterpillar, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[140] = tmp5;
    cResult[141] = tmp6;
    cResult[142] = tmp7;
    cResult[143] = tmp30;
    tmp25 = tmp30;
  } else if (GuildTagBadgeKind.SPIDER === tmp4) {
    if (cResult[144] === tmp5) {
      if (cResult[145] === tmp6) {
        if (cResult[146] === tmp7) {
          let tmp19 = cResult[147];
        }
        return tmp19;
      }
    }
    const obj41 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged39 = Object.assign(tmp6);
    const tmp24 = jsx(GuildBadgeSpider.GuildBadgeSpider, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[144] = tmp5;
    cResult[145] = tmp6;
    cResult[146] = tmp7;
    cResult[147] = tmp24;
    tmp19 = tmp24;
  } else if (GuildTagBadgeKind.BEE === tmp4) {
    if (cResult[148] === tmp5) {
      if (cResult[149] === tmp6) {
        let tmp13 = cResult[150];
      }
      return tmp13;
    }
    const obj42 = { primaryTintColor: tmp5 };
    const merged40 = Object.assign(tmp6);
    const tmp18 = jsx(GuildBadgeBee.GuildBadgeBee, { primaryTintColor: tmp5 });
    cResult[148] = tmp5;
    cResult[149] = tmp6;
    cResult[150] = tmp18;
    tmp13 = tmp18;
  } else {
    return null;
  }
}) : ((arg0) => {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(GuildBadgeSword.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    const obj3 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(GuildBadgeWaterDrop.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const obj4 = { primaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(GuildBadgeSkull.GuildBadgeSkull, { primaryTintColor });
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj5 = { primaryTintColor, secondaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(GuildBadgeToadstool.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj6 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(GuildBadgeMoon.GuildBadgeMoon, { primaryTintColor });
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj7 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(GuildBadgeLightning.GuildBadgeLightning, { primaryTintColor });
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj8 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(GuildBadgeLeaf.GuildBadgeLeaf, { primaryTintColor });
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj9 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(GuildBadgeHeart.GuildBadgeHeart, { primaryTintColor });
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj10 = { primaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(GuildBadgeFire.GuildBadgeFire, { primaryTintColor });
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(GuildBadgeCompass.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(GuildBadgeCrosshairs.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(GuildBadgeFlower.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(GuildBadgeForce.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(GuildBadgeGem.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(GuildBadgeLava.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(GuildBadgePsychic.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    const merged17 = Object.assign(merged);
    return jsx(GuildBadgeSmoke.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    const merged18 = Object.assign(merged);
    return jsx(GuildBadgeSnow.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj20 = { primaryTintColor, secondaryTintColor };
    const merged19 = Object.assign(merged);
    return jsx(GuildBadgeSound.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    const merged20 = Object.assign(merged);
    return jsx(GuildBadgeSun.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    const merged21 = Object.assign(merged);
    return jsx(GuildBadgeWind.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj23 = { primaryTintColor };
    const merged22 = Object.assign(merged);
    return jsx(GuildBadgeBunny.GuildBadgeBunny, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj24 = { primaryTintColor, secondaryTintColor };
    const merged23 = Object.assign(merged);
    return jsx(GuildBadgeDog.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj25 = { primaryTintColor, secondaryTintColor };
    const merged24 = Object.assign(merged);
    return jsx(GuildBadgeFrog.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj26 = { primaryTintColor };
    const merged25 = Object.assign(merged);
    return jsx(GuildBadgeGoat.GuildBadgeGoat, { primaryTintColor });
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj27 = { primaryTintColor };
    const merged26 = Object.assign(merged);
    return jsx(GuildBadgeCat.GuildBadgeCat, { primaryTintColor });
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj28 = { primaryTintColor };
    const merged27 = Object.assign(merged);
    return jsx(GuildBadgeDiamond.GuildBadgeDiamond, { primaryTintColor });
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj29 = { primaryTintColor, secondaryTintColor };
    const merged28 = Object.assign(merged);
    return jsx(GuildBadgeCrown.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj30 = { primaryTintColor };
    const merged29 = Object.assign(merged);
    return jsx(GuildBadgeTrophy.GuildBadgeTrophy, { primaryTintColor });
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj31 = { primaryTintColor };
    const merged30 = Object.assign(merged);
    return jsx(GuildBadgeMoneyBag.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj32 = { primaryTintColor };
    const merged31 = Object.assign(merged);
    return jsx(GuildBadgeDollarSign.GuildBadgeDollarSign, { primaryTintColor });
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj33 = { primaryTintColor };
    const merged32 = Object.assign(merged);
    return jsx(GuildBadgeClover.GuildBadgeClover, { primaryTintColor });
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj34 = { primaryTintColor };
    const merged33 = Object.assign(merged);
    return jsx(GuildBadgeBlossom.GuildBadgeBlossom, { primaryTintColor });
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged34 = Object.assign(merged);
    return jsx(GuildBadgePottedPlant.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj36 = { primaryTintColor };
    const merged35 = Object.assign(merged);
    return jsx(GuildBadgeMaple.GuildBadgeMaple, { primaryTintColor });
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged36 = Object.assign(merged);
    return jsx(GuildBadgeWiltedFlower.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged37 = Object.assign(merged);
    return jsx(GuildBadgeButterfly.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj39 = { primaryTintColor, secondaryTintColor };
    const merged38 = Object.assign(merged);
    return jsx(GuildBadgeSnail.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj40 = { primaryTintColor, secondaryTintColor };
    const merged39 = Object.assign(merged);
    return jsx(GuildBadgeCaterpillar.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj41 = { primaryTintColor, secondaryTintColor };
    const merged40 = Object.assign(merged);
    return jsx(GuildBadgeSpider.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BEE === badge) {
    const obj = { primaryTintColor };
    const merged41 = Object.assign(merged);
    return jsx(GuildBadgeBee.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
});