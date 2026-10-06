// === Module 13746: badges/GuildBadge ===

// Module 13746 (badges/GuildBadge)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import GuildTagConstants from "GuildTagConstants" /* 7614 */;
import GuildBadgeSword2 from "GuildBadgeSword" /* 13747 */;
import GuildBadgeWaterDrop2 from "GuildBadgeWaterDrop" /* 13750 */;
import GuildBadgeSkull2 from "GuildBadgeSkull" /* 13751 */;
import GuildBadgeToadstool2 from "GuildBadgeToadstool" /* 13752 */;
import GuildBadgeMoon2 from "GuildBadgeMoon" /* 13753 */;
import GuildBadgeLightning2 from "GuildBadgeLightning" /* 13754 */;
import GuildBadgeLeaf2 from "GuildBadgeLeaf" /* 13755 */;
import GuildBadgeHeart2 from "GuildBadgeHeart" /* 13756 */;
import GuildBadgeFire2 from "GuildBadgeFire" /* 13757 */;
import GuildBadgeCompass2 from "GuildBadgeCompass" /* 13758 */;
import GuildBadgeCrosshairs2 from "GuildBadgeCrosshairs" /* 13759 */;
import GuildBadgeFlower2 from "GuildBadgeFlower" /* 13760 */;
import GuildBadgeForce2 from "GuildBadgeForce" /* 13761 */;
import GuildBadgeGem2 from "GuildBadgeGem" /* 13762 */;
import GuildBadgeLava2 from "GuildBadgeLava" /* 13763 */;
import GuildBadgePsychic2 from "GuildBadgePsychic" /* 13764 */;
import GuildBadgeSmoke2 from "GuildBadgeSmoke" /* 13765 */;
import GuildBadgeSnow2 from "GuildBadgeSnow" /* 13766 */;
import GuildBadgeSound2 from "GuildBadgeSound" /* 13767 */;
import GuildBadgeSun2 from "GuildBadgeSun" /* 13768 */;
import GuildBadgeWind2 from "GuildBadgeWind" /* 13769 */;
import GuildBadgeBunny2 from "GuildBadgeBunny" /* 13770 */;
import GuildBadgeDog2 from "GuildBadgeDog" /* 13771 */;
import GuildBadgeFrog2 from "GuildBadgeFrog" /* 13772 */;
import GuildBadgeGoat2 from "GuildBadgeGoat" /* 13773 */;
import GuildBadgeCat2 from "GuildBadgeCat" /* 13774 */;
import GuildBadgeDiamond2 from "GuildBadgeDiamond" /* 13775 */;
import GuildBadgeCrown2 from "GuildBadgeCrown" /* 13776 */;
import GuildBadgeTrophy2 from "GuildBadgeTrophy" /* 13777 */;
import GuildBadgeMoneyBag2 from "GuildBadgeMoneyBag" /* 13778 */;
import GuildBadgeDollarSign2 from "GuildBadgeDollarSign" /* 13779 */;
import GuildBadgeClover2 from "GuildBadgeClover" /* 13780 */;
import GuildBadgeBlossom2 from "GuildBadgeBlossom" /* 13781 */;
import GuildBadgePottedPlant2 from "GuildBadgePottedPlant" /* 13782 */;
import GuildBadgeMaple2 from "GuildBadgeMaple" /* 13783 */;
import GuildBadgeWiltedFlower2 from "GuildBadgeWiltedFlower" /* 13784 */;
import GuildBadgeButterfly2 from "GuildBadgeButterfly" /* 13785 */;
import GuildBadgeSnail2 from "GuildBadgeSnail" /* 13786 */;
import GuildBadgeCaterpillar2 from "GuildBadgeCaterpillar" /* 13787 */;
import GuildBadgeSpider2 from "GuildBadgeSpider" /* 13788 */;
import GuildBadgeBee2 from "GuildBadgeBee" /* 13789 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["badge", "primaryTintColor", "secondaryTintColor"];
const GuildTagBadgeKind = GuildTagConstants.GuildTagBadgeKind;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badge;
  let primaryTintColor;
  let secondaryTintColor;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(151);
  if (cResult[0] !== arg0) {
    ({ badge, primaryTintColor, secondaryTintColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = badge;
    cResult[2] = primaryTintColor;
    cResult[3] = tmp10;
    cResult[4] = secondaryTintColor;
    tmp7 = secondaryTintColor;
    tmp6 = tmp10;
    tmp5 = primaryTintColor;
    tmp4 = badge;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (GuildTagBadgeKind.SWORD === tmp4) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        let tmp253;
        if (cResult[7] === tmp7) {
          tmp253 = cResult[8];
        }
        return tmp253;
      }
    }
    const GuildBadgeSword = GuildBadgeSword2.GuildBadgeSword;
    const merged = Object.assign(tmp6);
    const tmp258 = <GuildBadgeSword primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp7;
    cResult[8] = tmp258;
    tmp253 = tmp258;
  } else if (GuildTagBadgeKind.WATER_DROP === tmp4) {
    if (cResult[9] === tmp5) {
      let tmp247;
      if (cResult[10] === tmp6) {
        tmp247 = cResult[11];
      }
      return tmp247;
    }
    const GuildBadgeWaterDrop = GuildBadgeWaterDrop2.GuildBadgeWaterDrop;
    const merged1 = Object.assign(tmp6);
    const tmp252 = <GuildBadgeWaterDrop primaryTintColor={tmp5} />;
    cResult[9] = tmp5;
    cResult[10] = tmp6;
    cResult[11] = tmp252;
    tmp247 = tmp252;
  } else if (GuildTagBadgeKind.SKULL === tmp4) {
    if (cResult[12] === tmp5) {
      let tmp241;
      if (cResult[13] === tmp6) {
        tmp241 = cResult[14];
      }
      return tmp241;
    }
    const GuildBadgeSkull = GuildBadgeSkull2.GuildBadgeSkull;
    const merged2 = Object.assign(tmp6);
    const tmp246 = <GuildBadgeSkull primaryTintColor={tmp5} />;
    cResult[12] = tmp5;
    cResult[13] = tmp6;
    cResult[14] = tmp246;
    tmp241 = tmp246;
  } else if (GuildTagBadgeKind.TOADSTOOL === tmp4) {
    if (cResult[15] === tmp5) {
      if (cResult[16] === tmp6) {
        let tmp235;
        if (cResult[17] === tmp7) {
          tmp235 = cResult[18];
        }
        return tmp235;
      }
    }
    const GuildBadgeToadstool = GuildBadgeToadstool2.GuildBadgeToadstool;
    const merged3 = Object.assign(tmp6);
    const tmp240 = <GuildBadgeToadstool primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[15] = tmp5;
    cResult[16] = tmp6;
    cResult[17] = tmp7;
    cResult[18] = tmp240;
    tmp235 = tmp240;
  } else if (GuildTagBadgeKind.MOON === tmp4) {
    if (cResult[19] === tmp5) {
      let tmp229;
      if (cResult[20] === tmp6) {
        tmp229 = cResult[21];
      }
      return tmp229;
    }
    const GuildBadgeMoon = GuildBadgeMoon2.GuildBadgeMoon;
    const merged4 = Object.assign(tmp6);
    const tmp234 = <GuildBadgeMoon primaryTintColor={tmp5} />;
    cResult[19] = tmp5;
    cResult[20] = tmp6;
    cResult[21] = tmp234;
    tmp229 = tmp234;
  } else if (GuildTagBadgeKind.LIGHTNING === tmp4) {
    if (cResult[22] === tmp5) {
      let tmp223;
      if (cResult[23] === tmp6) {
        tmp223 = cResult[24];
      }
      return tmp223;
    }
    const GuildBadgeLightning = GuildBadgeLightning2.GuildBadgeLightning;
    const merged5 = Object.assign(tmp6);
    const tmp228 = <GuildBadgeLightning primaryTintColor={tmp5} />;
    cResult[22] = tmp5;
    cResult[23] = tmp6;
    cResult[24] = tmp228;
    tmp223 = tmp228;
  } else if (GuildTagBadgeKind.LEAF === tmp4) {
    if (cResult[25] === tmp5) {
      let tmp217;
      if (cResult[26] === tmp6) {
        tmp217 = cResult[27];
      }
      return tmp217;
    }
    const GuildBadgeLeaf = GuildBadgeLeaf2.GuildBadgeLeaf;
    const merged6 = Object.assign(tmp6);
    const tmp222 = <GuildBadgeLeaf primaryTintColor={tmp5} />;
    cResult[25] = tmp5;
    cResult[26] = tmp6;
    cResult[27] = tmp222;
    tmp217 = tmp222;
  } else if (GuildTagBadgeKind.HEART === tmp4) {
    if (cResult[28] === tmp5) {
      let tmp211;
      if (cResult[29] === tmp6) {
        tmp211 = cResult[30];
      }
      return tmp211;
    }
    const GuildBadgeHeart = GuildBadgeHeart2.GuildBadgeHeart;
    const merged7 = Object.assign(tmp6);
    const tmp216 = <GuildBadgeHeart primaryTintColor={tmp5} />;
    cResult[28] = tmp5;
    cResult[29] = tmp6;
    cResult[30] = tmp216;
    tmp211 = tmp216;
  } else if (GuildTagBadgeKind.FIRE === tmp4) {
    if (cResult[31] === tmp5) {
      let tmp205;
      if (cResult[32] === tmp6) {
        tmp205 = cResult[33];
      }
      return tmp205;
    }
    const GuildBadgeFire = GuildBadgeFire2.GuildBadgeFire;
    const merged8 = Object.assign(tmp6);
    const tmp210 = <GuildBadgeFire primaryTintColor={tmp5} />;
    cResult[31] = tmp5;
    cResult[32] = tmp6;
    cResult[33] = tmp210;
    tmp205 = tmp210;
  } else if (GuildTagBadgeKind.COMPASS === tmp4) {
    if (cResult[34] === tmp5) {
      if (cResult[35] === tmp6) {
        let tmp199;
        if (cResult[36] === tmp7) {
          tmp199 = cResult[37];
        }
        return tmp199;
      }
    }
    const GuildBadgeCompass = GuildBadgeCompass2.GuildBadgeCompass;
    const merged9 = Object.assign(tmp6);
    const tmp204 = <GuildBadgeCompass primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[34] = tmp5;
    cResult[35] = tmp6;
    cResult[36] = tmp7;
    cResult[37] = tmp204;
    tmp199 = tmp204;
  } else if (GuildTagBadgeKind.CROSSHAIRS === tmp4) {
    if (cResult[38] === tmp5) {
      if (cResult[39] === tmp6) {
        let tmp193;
        if (cResult[40] === tmp7) {
          tmp193 = cResult[41];
        }
        return tmp193;
      }
    }
    const GuildBadgeCrosshairs = GuildBadgeCrosshairs2.GuildBadgeCrosshairs;
    const merged10 = Object.assign(tmp6);
    const tmp198 = <GuildBadgeCrosshairs primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[38] = tmp5;
    cResult[39] = tmp6;
    cResult[40] = tmp7;
    cResult[41] = tmp198;
    tmp193 = tmp198;
  } else if (GuildTagBadgeKind.FLOWER === tmp4) {
    if (cResult[42] === tmp5) {
      if (cResult[43] === tmp6) {
        let tmp187;
        if (cResult[44] === tmp7) {
          tmp187 = cResult[45];
        }
        return tmp187;
      }
    }
    const GuildBadgeFlower = GuildBadgeFlower2.GuildBadgeFlower;
    const merged11 = Object.assign(tmp6);
    const tmp192 = <GuildBadgeFlower primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[42] = tmp5;
    cResult[43] = tmp6;
    cResult[44] = tmp7;
    cResult[45] = tmp192;
    tmp187 = tmp192;
  } else if (GuildTagBadgeKind.FORCE === tmp4) {
    if (cResult[46] === tmp5) {
      if (cResult[47] === tmp6) {
        let tmp181;
        if (cResult[48] === tmp7) {
          tmp181 = cResult[49];
        }
        return tmp181;
      }
    }
    const GuildBadgeForce = GuildBadgeForce2.GuildBadgeForce;
    const merged12 = Object.assign(tmp6);
    const tmp186 = <GuildBadgeForce primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[46] = tmp5;
    cResult[47] = tmp6;
    cResult[48] = tmp7;
    cResult[49] = tmp186;
    tmp181 = tmp186;
  } else if (GuildTagBadgeKind.GEM === tmp4) {
    if (cResult[50] === tmp5) {
      if (cResult[51] === tmp6) {
        let tmp175;
        if (cResult[52] === tmp7) {
          tmp175 = cResult[53];
        }
        return tmp175;
      }
    }
    const GuildBadgeGem = GuildBadgeGem2.GuildBadgeGem;
    const merged13 = Object.assign(tmp6);
    const tmp180 = <GuildBadgeGem primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[50] = tmp5;
    cResult[51] = tmp6;
    cResult[52] = tmp7;
    cResult[53] = tmp180;
    tmp175 = tmp180;
  } else if (GuildTagBadgeKind.LAVA === tmp4) {
    if (cResult[54] === tmp5) {
      if (cResult[55] === tmp6) {
        let tmp169;
        if (cResult[56] === tmp7) {
          tmp169 = cResult[57];
        }
        return tmp169;
      }
    }
    const GuildBadgeLava = GuildBadgeLava2.GuildBadgeLava;
    const merged14 = Object.assign(tmp6);
    const tmp174 = <GuildBadgeLava primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[54] = tmp5;
    cResult[55] = tmp6;
    cResult[56] = tmp7;
    cResult[57] = tmp174;
    tmp169 = tmp174;
  } else if (GuildTagBadgeKind.PSYCHIC === tmp4) {
    if (cResult[58] === tmp5) {
      if (cResult[59] === tmp6) {
        let tmp163;
        if (cResult[60] === tmp7) {
          tmp163 = cResult[61];
        }
        return tmp163;
      }
    }
    const GuildBadgePsychic = GuildBadgePsychic2.GuildBadgePsychic;
    const merged15 = Object.assign(tmp6);
    const tmp168 = <GuildBadgePsychic primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[58] = tmp5;
    cResult[59] = tmp6;
    cResult[60] = tmp7;
    cResult[61] = tmp168;
    tmp163 = tmp168;
  } else if (GuildTagBadgeKind.SMOKE === tmp4) {
    if (cResult[62] === tmp5) {
      if (cResult[63] === tmp6) {
        let tmp157;
        if (cResult[64] === tmp7) {
          tmp157 = cResult[65];
        }
        return tmp157;
      }
    }
    const GuildBadgeSmoke = GuildBadgeSmoke2.GuildBadgeSmoke;
    const merged16 = Object.assign(tmp6);
    const tmp162 = <GuildBadgeSmoke primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[62] = tmp5;
    cResult[63] = tmp6;
    cResult[64] = tmp7;
    cResult[65] = tmp162;
    tmp157 = tmp162;
  } else if (GuildTagBadgeKind.SNOW === tmp4) {
    if (cResult[66] === tmp5) {
      if (cResult[67] === tmp6) {
        let tmp151;
        if (cResult[68] === tmp7) {
          tmp151 = cResult[69];
        }
        return tmp151;
      }
    }
    const GuildBadgeSnow = GuildBadgeSnow2.GuildBadgeSnow;
    const merged17 = Object.assign(tmp6);
    const tmp156 = <GuildBadgeSnow primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[66] = tmp5;
    cResult[67] = tmp6;
    cResult[68] = tmp7;
    cResult[69] = tmp156;
    tmp151 = tmp156;
  } else if (GuildTagBadgeKind.SOUND === tmp4) {
    if (cResult[70] === tmp5) {
      if (cResult[71] === tmp6) {
        let tmp145;
        if (cResult[72] === tmp7) {
          tmp145 = cResult[73];
        }
        return tmp145;
      }
    }
    const GuildBadgeSound = GuildBadgeSound2.GuildBadgeSound;
    const merged18 = Object.assign(tmp6);
    const tmp150 = <GuildBadgeSound primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[70] = tmp5;
    cResult[71] = tmp6;
    cResult[72] = tmp7;
    cResult[73] = tmp150;
    tmp145 = tmp150;
  } else if (GuildTagBadgeKind.SUN === tmp4) {
    if (cResult[74] === tmp5) {
      if (cResult[75] === tmp6) {
        let tmp139;
        if (cResult[76] === tmp7) {
          tmp139 = cResult[77];
        }
        return tmp139;
      }
    }
    const GuildBadgeSun = GuildBadgeSun2.GuildBadgeSun;
    const merged19 = Object.assign(tmp6);
    const tmp144 = <GuildBadgeSun primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[74] = tmp5;
    cResult[75] = tmp6;
    cResult[76] = tmp7;
    cResult[77] = tmp144;
    tmp139 = tmp144;
  } else if (GuildTagBadgeKind.WIND === tmp4) {
    if (cResult[78] === tmp5) {
      if (cResult[79] === tmp6) {
        let tmp133;
        if (cResult[80] === tmp7) {
          tmp133 = cResult[81];
        }
        return tmp133;
      }
    }
    const GuildBadgeWind = GuildBadgeWind2.GuildBadgeWind;
    const merged20 = Object.assign(tmp6);
    const tmp138 = <GuildBadgeWind primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[78] = tmp5;
    cResult[79] = tmp6;
    cResult[80] = tmp7;
    cResult[81] = tmp138;
    tmp133 = tmp138;
  } else if (GuildTagBadgeKind.BUNNY === tmp4) {
    if (cResult[82] === tmp5) {
      let tmp127;
      if (cResult[83] === tmp6) {
        tmp127 = cResult[84];
      }
      return tmp127;
    }
    const GuildBadgeBunny = GuildBadgeBunny2.GuildBadgeBunny;
    const merged21 = Object.assign(tmp6);
    const tmp132 = <GuildBadgeBunny primaryTintColor={tmp5} />;
    cResult[82] = tmp5;
    cResult[83] = tmp6;
    cResult[84] = tmp132;
    tmp127 = tmp132;
  } else if (GuildTagBadgeKind.DOG === tmp4) {
    if (cResult[85] === tmp5) {
      if (cResult[86] === tmp6) {
        let tmp121;
        if (cResult[87] === tmp7) {
          tmp121 = cResult[88];
        }
        return tmp121;
      }
    }
    const GuildBadgeDog = GuildBadgeDog2.GuildBadgeDog;
    const merged22 = Object.assign(tmp6);
    const tmp126 = <GuildBadgeDog primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[85] = tmp5;
    cResult[86] = tmp6;
    cResult[87] = tmp7;
    cResult[88] = tmp126;
    tmp121 = tmp126;
  } else if (GuildTagBadgeKind.FROG === tmp4) {
    if (cResult[89] === tmp5) {
      if (cResult[90] === tmp6) {
        let tmp115;
        if (cResult[91] === tmp7) {
          tmp115 = cResult[92];
        }
        return tmp115;
      }
    }
    const GuildBadgeFrog = GuildBadgeFrog2.GuildBadgeFrog;
    const merged23 = Object.assign(tmp6);
    const tmp120 = <GuildBadgeFrog primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[89] = tmp5;
    cResult[90] = tmp6;
    cResult[91] = tmp7;
    cResult[92] = tmp120;
    tmp115 = tmp120;
  } else if (GuildTagBadgeKind.GOAT === tmp4) {
    if (cResult[93] === tmp5) {
      let tmp109;
      if (cResult[94] === tmp6) {
        tmp109 = cResult[95];
      }
      return tmp109;
    }
    const GuildBadgeGoat = GuildBadgeGoat2.GuildBadgeGoat;
    const merged24 = Object.assign(tmp6);
    const tmp114 = <GuildBadgeGoat primaryTintColor={tmp5} />;
    cResult[93] = tmp5;
    cResult[94] = tmp6;
    cResult[95] = tmp114;
    tmp109 = tmp114;
  } else if (GuildTagBadgeKind.CAT === tmp4) {
    if (cResult[96] === tmp5) {
      let tmp103;
      if (cResult[97] === tmp6) {
        tmp103 = cResult[98];
      }
      return tmp103;
    }
    const GuildBadgeCat = GuildBadgeCat2.GuildBadgeCat;
    const merged25 = Object.assign(tmp6);
    const tmp108 = <GuildBadgeCat primaryTintColor={tmp5} />;
    cResult[96] = tmp5;
    cResult[97] = tmp6;
    cResult[98] = tmp108;
    tmp103 = tmp108;
  } else if (GuildTagBadgeKind.DIAMOND === tmp4) {
    if (cResult[99] === tmp5) {
      let tmp97;
      if (cResult[100] === tmp6) {
        tmp97 = cResult[101];
      }
      return tmp97;
    }
    const GuildBadgeDiamond = GuildBadgeDiamond2.GuildBadgeDiamond;
    const merged26 = Object.assign(tmp6);
    const tmp102 = <GuildBadgeDiamond primaryTintColor={tmp5} />;
    cResult[99] = tmp5;
    cResult[100] = tmp6;
    cResult[101] = tmp102;
    tmp97 = tmp102;
  } else if (GuildTagBadgeKind.CROWN === tmp4) {
    if (cResult[102] === tmp5) {
      if (cResult[103] === tmp6) {
        let tmp91;
        if (cResult[104] === tmp7) {
          tmp91 = cResult[105];
        }
        return tmp91;
      }
    }
    const GuildBadgeCrown = GuildBadgeCrown2.GuildBadgeCrown;
    const merged27 = Object.assign(tmp6);
    const tmp96 = <GuildBadgeCrown primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[102] = tmp5;
    cResult[103] = tmp6;
    cResult[104] = tmp7;
    cResult[105] = tmp96;
    tmp91 = tmp96;
  } else if (GuildTagBadgeKind.TROPHY === tmp4) {
    if (cResult[106] === tmp5) {
      let tmp85;
      if (cResult[107] === tmp6) {
        tmp85 = cResult[108];
      }
      return tmp85;
    }
    const GuildBadgeTrophy = GuildBadgeTrophy2.GuildBadgeTrophy;
    const merged28 = Object.assign(tmp6);
    const tmp90 = <GuildBadgeTrophy primaryTintColor={tmp5} />;
    cResult[106] = tmp5;
    cResult[107] = tmp6;
    cResult[108] = tmp90;
    tmp85 = tmp90;
  } else if (GuildTagBadgeKind.MONEY_BAG === tmp4) {
    if (cResult[109] === tmp5) {
      let tmp79;
      if (cResult[110] === tmp6) {
        tmp79 = cResult[111];
      }
      return tmp79;
    }
    const GuildBadgeMoneyBag = GuildBadgeMoneyBag2.GuildBadgeMoneyBag;
    const merged29 = Object.assign(tmp6);
    const tmp84 = <GuildBadgeMoneyBag primaryTintColor={tmp5} />;
    cResult[109] = tmp5;
    cResult[110] = tmp6;
    cResult[111] = tmp84;
    tmp79 = tmp84;
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === tmp4) {
    if (cResult[112] === tmp5) {
      let tmp73;
      if (cResult[113] === tmp6) {
        tmp73 = cResult[114];
      }
      return tmp73;
    }
    const GuildBadgeDollarSign = GuildBadgeDollarSign2.GuildBadgeDollarSign;
    const merged30 = Object.assign(tmp6);
    const tmp78 = <GuildBadgeDollarSign primaryTintColor={tmp5} />;
    cResult[112] = tmp5;
    cResult[113] = tmp6;
    cResult[114] = tmp78;
    tmp73 = tmp78;
  } else if (GuildTagBadgeKind.CLOVER === tmp4) {
    if (cResult[115] === tmp5) {
      let tmp67;
      if (cResult[116] === tmp6) {
        tmp67 = cResult[117];
      }
      return tmp67;
    }
    const GuildBadgeClover = GuildBadgeClover2.GuildBadgeClover;
    const merged31 = Object.assign(tmp6);
    const tmp72 = <GuildBadgeClover primaryTintColor={tmp5} />;
    cResult[115] = tmp5;
    cResult[116] = tmp6;
    cResult[117] = tmp72;
    tmp67 = tmp72;
  } else if (GuildTagBadgeKind.BLOSSOM === tmp4) {
    if (cResult[118] === tmp5) {
      let tmp61;
      if (cResult[119] === tmp6) {
        tmp61 = cResult[120];
      }
      return tmp61;
    }
    const GuildBadgeBlossom = GuildBadgeBlossom2.GuildBadgeBlossom;
    const merged32 = Object.assign(tmp6);
    const tmp66 = <GuildBadgeBlossom primaryTintColor={tmp5} />;
    cResult[118] = tmp5;
    cResult[119] = tmp6;
    cResult[120] = tmp66;
    tmp61 = tmp66;
  } else if (GuildTagBadgeKind.POTTED_PLANT === tmp4) {
    if (cResult[121] === tmp5) {
      if (cResult[122] === tmp6) {
        let tmp55;
        if (cResult[123] === tmp7) {
          tmp55 = cResult[124];
        }
        return tmp55;
      }
    }
    const GuildBadgePottedPlant = GuildBadgePottedPlant2.GuildBadgePottedPlant;
    const merged33 = Object.assign(tmp6);
    const tmp60 = <GuildBadgePottedPlant primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[121] = tmp5;
    cResult[122] = tmp6;
    cResult[123] = tmp7;
    cResult[124] = tmp60;
    tmp55 = tmp60;
  } else if (GuildTagBadgeKind.MAPLE === tmp4) {
    if (cResult[125] === tmp5) {
      let tmp49;
      if (cResult[126] === tmp6) {
        tmp49 = cResult[127];
      }
      return tmp49;
    }
    const GuildBadgeMaple = GuildBadgeMaple2.GuildBadgeMaple;
    const merged34 = Object.assign(tmp6);
    const tmp54 = <GuildBadgeMaple primaryTintColor={tmp5} />;
    cResult[125] = tmp5;
    cResult[126] = tmp6;
    cResult[127] = tmp54;
    tmp49 = tmp54;
  } else if (GuildTagBadgeKind.WILTED_FLOWER === tmp4) {
    if (cResult[128] === tmp5) {
      if (cResult[129] === tmp6) {
        let tmp43;
        if (cResult[130] === tmp7) {
          tmp43 = cResult[131];
        }
        return tmp43;
      }
    }
    const GuildBadgeWiltedFlower = GuildBadgeWiltedFlower2.GuildBadgeWiltedFlower;
    const merged35 = Object.assign(tmp6);
    const tmp48 = <GuildBadgeWiltedFlower primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[128] = tmp5;
    cResult[129] = tmp6;
    cResult[130] = tmp7;
    cResult[131] = tmp48;
    tmp43 = tmp48;
  } else if (GuildTagBadgeKind.BUTTERFLY === tmp4) {
    if (cResult[132] === tmp5) {
      if (cResult[133] === tmp6) {
        let tmp37;
        if (cResult[134] === tmp7) {
          tmp37 = cResult[135];
        }
        return tmp37;
      }
    }
    const GuildBadgeButterfly = GuildBadgeButterfly2.GuildBadgeButterfly;
    const merged36 = Object.assign(tmp6);
    const tmp42 = <GuildBadgeButterfly primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[132] = tmp5;
    cResult[133] = tmp6;
    cResult[134] = tmp7;
    cResult[135] = tmp42;
    tmp37 = tmp42;
  } else if (GuildTagBadgeKind.SNAIL === tmp4) {
    if (cResult[136] === tmp5) {
      if (cResult[137] === tmp6) {
        let tmp31;
        if (cResult[138] === tmp7) {
          tmp31 = cResult[139];
        }
        return tmp31;
      }
    }
    const GuildBadgeSnail = GuildBadgeSnail2.GuildBadgeSnail;
    const merged37 = Object.assign(tmp6);
    const tmp36 = <GuildBadgeSnail primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[136] = tmp5;
    cResult[137] = tmp6;
    cResult[138] = tmp7;
    cResult[139] = tmp36;
    tmp31 = tmp36;
  } else if (GuildTagBadgeKind.CATERPILLAR === tmp4) {
    if (cResult[140] === tmp5) {
      if (cResult[141] === tmp6) {
        let tmp25;
        if (cResult[142] === tmp7) {
          tmp25 = cResult[143];
        }
        return tmp25;
      }
    }
    const GuildBadgeCaterpillar = GuildBadgeCaterpillar2.GuildBadgeCaterpillar;
    const merged38 = Object.assign(tmp6);
    const tmp30 = <GuildBadgeCaterpillar primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[140] = tmp5;
    cResult[141] = tmp6;
    cResult[142] = tmp7;
    cResult[143] = tmp30;
    tmp25 = tmp30;
  } else if (GuildTagBadgeKind.SPIDER === tmp4) {
    if (cResult[144] === tmp5) {
      if (cResult[145] === tmp6) {
        let tmp19;
        if (cResult[146] === tmp7) {
          tmp19 = cResult[147];
        }
        return tmp19;
      }
    }
    const GuildBadgeSpider = GuildBadgeSpider2.GuildBadgeSpider;
    const merged39 = Object.assign(tmp6);
    const tmp24 = <GuildBadgeSpider primaryTintColor={tmp5} secondaryTintColor={tmp7} />;
    cResult[144] = tmp5;
    cResult[145] = tmp6;
    cResult[146] = tmp7;
    cResult[147] = tmp24;
    tmp19 = tmp24;
  } else if (GuildTagBadgeKind.BEE === tmp4) {
    if (cResult[148] === tmp5) {
      let tmp13;
      if (cResult[149] === tmp6) {
        tmp13 = cResult[150];
      }
      return tmp13;
    }
    const GuildBadgeBee = GuildBadgeBee2.GuildBadgeBee;
    const merged40 = Object.assign(tmp6);
    const tmp18 = <GuildBadgeBee primaryTintColor={tmp5} />;
    cResult[148] = tmp5;
    cResult[149] = tmp6;
    cResult[150] = tmp18;
    tmp13 = tmp18;
  } else {
    return null;
  }
}) : ((arg0) => {
  let badge;
  let primaryTintColor;
  let secondaryTintColor;
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    const GuildBadgeSword = GuildBadgeSword2.GuildBadgeSword;
    const merged1 = Object.assign(merged);
    return <GuildBadgeSword primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    const GuildBadgeWaterDrop = GuildBadgeWaterDrop2.GuildBadgeWaterDrop;
    const merged2 = Object.assign(merged);
    return <GuildBadgeWaterDrop primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const GuildBadgeSkull = GuildBadgeSkull2.GuildBadgeSkull;
    const merged3 = Object.assign(merged);
    return <GuildBadgeSkull primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const GuildBadgeToadstool = GuildBadgeToadstool2.GuildBadgeToadstool;
    const merged4 = Object.assign(merged);
    return <GuildBadgeToadstool primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.MOON === badge) {
    const GuildBadgeMoon = GuildBadgeMoon2.GuildBadgeMoon;
    const merged5 = Object.assign(merged);
    return <GuildBadgeMoon primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const GuildBadgeLightning = GuildBadgeLightning2.GuildBadgeLightning;
    const merged6 = Object.assign(merged);
    return <GuildBadgeLightning primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const GuildBadgeLeaf = GuildBadgeLeaf2.GuildBadgeLeaf;
    const merged7 = Object.assign(merged);
    return <GuildBadgeLeaf primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.HEART === badge) {
    const GuildBadgeHeart = GuildBadgeHeart2.GuildBadgeHeart;
    const merged8 = Object.assign(merged);
    return <GuildBadgeHeart primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const GuildBadgeFire = GuildBadgeFire2.GuildBadgeFire;
    const merged9 = Object.assign(merged);
    return <GuildBadgeFire primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const GuildBadgeCompass = GuildBadgeCompass2.GuildBadgeCompass;
    const merged10 = Object.assign(merged);
    return <GuildBadgeCompass primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const GuildBadgeCrosshairs = GuildBadgeCrosshairs2.GuildBadgeCrosshairs;
    const merged11 = Object.assign(merged);
    return <GuildBadgeCrosshairs primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const GuildBadgeFlower = GuildBadgeFlower2.GuildBadgeFlower;
    const merged12 = Object.assign(merged);
    return <GuildBadgeFlower primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const GuildBadgeForce = GuildBadgeForce2.GuildBadgeForce;
    const merged13 = Object.assign(merged);
    return <GuildBadgeForce primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.GEM === badge) {
    const GuildBadgeGem = GuildBadgeGem2.GuildBadgeGem;
    const merged14 = Object.assign(merged);
    return <GuildBadgeGem primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const GuildBadgeLava = GuildBadgeLava2.GuildBadgeLava;
    const merged15 = Object.assign(merged);
    return <GuildBadgeLava primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const GuildBadgePsychic = GuildBadgePsychic2.GuildBadgePsychic;
    const merged16 = Object.assign(merged);
    return <GuildBadgePsychic primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const GuildBadgeSmoke = GuildBadgeSmoke2.GuildBadgeSmoke;
    const merged17 = Object.assign(merged);
    return <GuildBadgeSmoke primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const GuildBadgeSnow = GuildBadgeSnow2.GuildBadgeSnow;
    const merged18 = Object.assign(merged);
    return <GuildBadgeSnow primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const GuildBadgeSound = GuildBadgeSound2.GuildBadgeSound;
    const merged19 = Object.assign(merged);
    return <GuildBadgeSound primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SUN === badge) {
    const GuildBadgeSun = GuildBadgeSun2.GuildBadgeSun;
    const merged20 = Object.assign(merged);
    return <GuildBadgeSun primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.WIND === badge) {
    const GuildBadgeWind = GuildBadgeWind2.GuildBadgeWind;
    const merged21 = Object.assign(merged);
    return <GuildBadgeWind primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const GuildBadgeBunny = GuildBadgeBunny2.GuildBadgeBunny;
    const merged22 = Object.assign(merged);
    return <GuildBadgeBunny primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.DOG === badge) {
    const GuildBadgeDog = GuildBadgeDog2.GuildBadgeDog;
    const merged23 = Object.assign(merged);
    return <GuildBadgeDog primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.FROG === badge) {
    const GuildBadgeFrog = GuildBadgeFrog2.GuildBadgeFrog;
    const merged24 = Object.assign(merged);
    return <GuildBadgeFrog primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const GuildBadgeGoat = GuildBadgeGoat2.GuildBadgeGoat;
    const merged25 = Object.assign(merged);
    return <GuildBadgeGoat primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.CAT === badge) {
    const GuildBadgeCat = GuildBadgeCat2.GuildBadgeCat;
    const merged26 = Object.assign(merged);
    return <GuildBadgeCat primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const GuildBadgeDiamond = GuildBadgeDiamond2.GuildBadgeDiamond;
    const merged27 = Object.assign(merged);
    return <GuildBadgeDiamond primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const GuildBadgeCrown = GuildBadgeCrown2.GuildBadgeCrown;
    const merged28 = Object.assign(merged);
    return <GuildBadgeCrown primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const GuildBadgeTrophy = GuildBadgeTrophy2.GuildBadgeTrophy;
    const merged29 = Object.assign(merged);
    return <GuildBadgeTrophy primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const GuildBadgeMoneyBag = GuildBadgeMoneyBag2.GuildBadgeMoneyBag;
    const merged30 = Object.assign(merged);
    return <GuildBadgeMoneyBag primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const GuildBadgeDollarSign = GuildBadgeDollarSign2.GuildBadgeDollarSign;
    const merged31 = Object.assign(merged);
    return <GuildBadgeDollarSign primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const GuildBadgeClover = GuildBadgeClover2.GuildBadgeClover;
    const merged32 = Object.assign(merged);
    return <GuildBadgeClover primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const GuildBadgeBlossom = GuildBadgeBlossom2.GuildBadgeBlossom;
    const merged33 = Object.assign(merged);
    return <GuildBadgeBlossom primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const GuildBadgePottedPlant = GuildBadgePottedPlant2.GuildBadgePottedPlant;
    const merged34 = Object.assign(merged);
    return <GuildBadgePottedPlant primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const GuildBadgeMaple = GuildBadgeMaple2.GuildBadgeMaple;
    const merged35 = Object.assign(merged);
    return <GuildBadgeMaple primaryTintColor={primaryTintColor} />;
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const GuildBadgeWiltedFlower = GuildBadgeWiltedFlower2.GuildBadgeWiltedFlower;
    const merged36 = Object.assign(merged);
    return <GuildBadgeWiltedFlower primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const GuildBadgeButterfly = GuildBadgeButterfly2.GuildBadgeButterfly;
    const merged37 = Object.assign(merged);
    return <GuildBadgeButterfly primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const GuildBadgeSnail = GuildBadgeSnail2.GuildBadgeSnail;
    const merged38 = Object.assign(merged);
    return <GuildBadgeSnail primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const GuildBadgeCaterpillar = GuildBadgeCaterpillar2.GuildBadgeCaterpillar;
    const merged39 = Object.assign(merged);
    return <GuildBadgeCaterpillar primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const GuildBadgeSpider = GuildBadgeSpider2.GuildBadgeSpider;
    const merged40 = Object.assign(merged);
    return <GuildBadgeSpider primaryTintColor={primaryTintColor} secondaryTintColor={secondaryTintColor} />;
  } else if (GuildTagBadgeKind.BEE === badge) {
    const GuildBadgeBee = GuildBadgeBee2.GuildBadgeBee;
    const merged41 = Object.assign(merged);
    return <GuildBadgeBee primaryTintColor={primaryTintColor} />;
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = tmp3;