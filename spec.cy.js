const { styles } = require("ansi-colors");
const { bold } = require("colorette");
import { zhapixSelectors } from "../support/utils/zhapix-selectors";

describe('Zhapix Website Test', () => {
  beforeEach(' Load zhapix site ', () => {
    cy.visit('https://www.zhapix.com/')
  })
  it.only('clik test',()=>{
   let selector='body > div.zpheader-style-01.theme-header-fixed.theme-mobile-header-style-01 > div.theme-header > div:nth-child(1) > div.theme-navigation-and-icons > div > div > ul > li > a > span > span'
   
   
  let newSelect="#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-container > div.zpelement.zptab.zptab-active > div > span"
   cy.get(newSelect).click();
  })
  it('To verify screen appears and logo is visible',()=> {
    let imgselector="body > div.zpheader-style-01.theme-header-fixed.theme-mobile-header-style-01 > div.theme-header > div:nth-child(1) > div.theme-branding-info > div > a > picture > img";
    cy.get(imgselector).should('have.attr','src').and('contains','/zhapix  logo 1 1.png');
  })
  it('To verify "Inclusive Digital Interaction" is visible or not',() => {
    let headingselector='body > div.theme-banner.zphero-full-screen > div > div > ul > li > div.zphero-slider-container.zshero-banner-style-05 > div > div.zprow.zprow-container.zpalign-items-center.zpjustify-content-flex-start > div > div > h2 > span';
    cy.get(headingselector).should('have.text','INCLUSIVE DIGITAL INTERACTION');
  })
  it('To verify "Inclusive Digital Interaction" font is in bold or not',() =>{
    let headingstyleselector='body > div.theme-banner.zphero-full-screen > div > div > ul > li > div.zphero-slider-container.zshero-banner-style-05 > div > div.zprow.zprow-container.zpalign-items-center.zpjustify-content-flex-start > div > div > h2 > span';
    cy.get(headingstyleselector).should('have.css','font-weight','700');  
  })
  it('To verify text is highlighted to green',()=>{
    let tagstyleselector='body > div.theme-banner.zphero-full-screen > div > div > ul > li > div.zphero-slider-container.zshero-banner-style-05 > div > div.zprow.zprow-container.zpalign-items-flex-start.zpjustify-content-flex-start.zpdefault-section.zpdefault-section-bg > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div > div'
    cy.get(tagstyleselector).should('have.css','color','rgb(98, 104, 120)');
  })
  it('To verify both sectors named "UI Domain" and "Technical Leadership" with logo are visible',()=>{
    let sectorheadingselector1='#thememaincontent > div:nth-child(2) > div > div > div:nth-child(2) > div.zpelement.zpelem-iconheadingtext > div > h4'
    let sectorheadingselector2='#thememaincontent > div:nth-child(2) > div > div > div:nth-child(3) > div.zpelement.zpelem-iconheadingtext > div > h4 > span'
    cy.get(sectorheadingselector1).should('have.text','UI Domain');
    cy.get(sectorheadingselector2).should('have.text','Technical Leadership');
  })
  it('To verify "We Focus On" content ,heading and images are visible',()=>{
    let Mainheadselector='#thememaincontent > div:nth-child(3) > div > div > div > div > h1 > span'
    let subheadselector1='#thememaincontent > div:nth-child(4) > div > div > div:nth-child(2) > div.zpelement.zpelem-heading > h4 > div > h4:nth-child(2) > span'
    let subheadselector2='#thememaincontent > div:nth-child(5) > div > div > div:nth-child(3) > div.zpelement.zpelem-heading > h4 > div > h4 > span'
    let subheadselector3='#thememaincontent > div:nth-child(6) > div > div > div:nth-child(2) > div.zpelement.zpelem-heading > h2'
    let imgsubheadselector1='#thememaincontent > div:nth-child(4) > div > div > div:nth-child(3) > div > div > figure > span > picture > img'
    let imgsubheadselector2='#thememaincontent > div:nth-child(5) > div > div > div:nth-child(2) > div > div > figure > span > picture > img'
    let imgsubheadselector3='#thememaincontent > div:nth-child(6) > div > div > div:nth-child(3) > div > div > figure > span > picture > img'
    cy.get(Mainheadselector).should('have.text','We Focus On');
    cy.get(subheadselector1).should('have.text','Expert Service');
    cy.get(subheadselector2).should('have.text','Digital Interaction Platform');
    cy.get(subheadselector3).should('have.text','Center of Excellence (CoE)');
    cy.get(imgsubheadselector1).should('have.attr','src').and('contains','/1111.jfif');
    cy.get(imgsubheadselector2).should('have.attr','src').and('contains','/rs-w_600-h_300-cg_true.jfif');
    cy.get(imgsubheadselector3).should('have.attr','src').and('contains','/files/optimized_upscalemedia-transformed_544x280.webp')  
  })
  it('To verify logo and content are visible of 3 sectors',()=>{
    let imgsubheadselector1='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(2) > div.zpelement.zpelem-imageheadingtext > div > figure > span > picture > img'
    let imgsubheadselector2='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(3) > div.zpelement.zpelem-imageheadingtext > div > figure > span > picture > img'
    let imgsubheadselector3='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(4) > div.zpelement.zpelem-imageheadingtext > div > figure > span > picture > img'
    // let subheadselector1='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(2) > div.zprow.zprow-container.zpalign-items-flex-start.zpjustify-content-flex-start.zpdefault-section.zpdefault-section-bg > div > div.zpelement.zpelem-heading > h2 > div'
let subheadselector1 = '#thememaincontent > div:nth-child(7) > div > div > div:nth-child(2) > div.zprow.zprow-container.zpalign-items-flex-start.zpjustify-content-flex-start.zpdefault-section.zpdefault-section-bg > div > div.zpelement.zpelem-heading > h2 > div > h2:nth-child(2)';
    // let subheadselector2='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(3) > div.zpelement.zpelem-heading > h2'
let subheadselector2='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(3) > div.zpelement.zpelem-heading > h2';
    //let subheadselector3='#thememaincontent > div:nth-child(7) > div > div > div:nth-child(4) > div.zpelement.zpelem-heading > h2';
    cy.get(imgsubheadselector1).should('have.attr','src').and('contains','/files/apps/optimized_4_150x150.png')
    cy.get(imgsubheadselector2).should('have.attr','src').and('contains','/files/apps/optimized_2_150x150.png')
    cy.get(imgsubheadselector3).should('have.attr','src').and('contains','/files/apps/optimized_3_150x150.png')
    cy.get(subheadselector1).should('include.text', '15+');
    cy.get(subheadselector2).should('have.text','1000+Interviews / Year')
    //cy.get(subheadselector3).should('have.text','30+​Tools & ​Technologies')
  })
  it('To verify "Device and Platform" content ,heading and logos are visible',()=>{
    let headingselector='#thememaincontent > div:nth-child(8) > div > div > div > div.zpelement.zpelem-heading > h2 > div > h2'
    let imgsubheadselector1='#thememaincontent > div:nth-child(9) > div > div > div:nth-child(2) > div > div > figure > span > picture > img'
    let imgsubheadselector2='#thememaincontent > div:nth-child(9) > div > div > div:nth-child(3) > div > div > figure > span > picture > img'
    let imgsubheadselector3='#thememaincontent > div:nth-child(9) > div > div > div:nth-child(4) > div > div > figure > span > picture > img'
    let imgsubheadselector4='#thememaincontent > div:nth-child(9) > div > div > div:nth-child(5) > div > div > figure > span > picture > img'
    cy.get(headingselector).should('include.text','Devices & Platform')
    cy.get(imgsubheadselector1).should('have.attr','src').and('contains','/files/apps/optimized_www-1 -1-_200x200.png')
    cy.get(imgsubheadselector2).should('have.attr','src').and('contains','/files/apps/optimized_ios lo_120x224.png') 
    cy.get(imgsubheadselector3).should("have.attr",'src').and('contains','/files/apps/optimized_android-logo__1_-removebg-preview -1-_200x200.png')
    cy.get(imgsubheadselector4).should('have.attr','src').and('contains','/files/apps/optimized_moup -2- -1-_233x233.png')
   })
   it('To verify "UI Experts Network" content ,heading and images are visible',()=>{
    let imgselector='#thememaincontent > div.zpsection.zpdefault-section.zpdefault-section-bg.zscustom-section-28 > div > div > div:nth-child(2) > div > div > figure > span > picture > img'
    let imageheadingselector='#thememaincontent > div.zpsection.zpdefault-section.zpdefault-section-bg.zscustom-section-28 > div > div > div.zpelem-col.zpcol-12.zpcol-md-6.zpcol-sm-12.zsflex-stretch-align.zpalign-self-.zpdefault-section.zpdefault-section-bg > div > div.zpelement.zpelem-heading > h4 > span'
    cy.get(imgselector).should('have.attr','src').and('contains','/optimized_Experts_Network_540x360.jpg')
    cy.get(imageheadingselector).should('include.text','UI Experts Network')
  })
  it('To verify "Our Specialization" heading and logos are visible',()=>{
    let headingselector='#my-work > div > div > div > div.zpelement.zpelem-heading > h2 > span'
    let headingselector1='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab.zptab-active > div > span'
    let headingselector2='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div:nth-child(3) > div > span'
    let headingselector3='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div:nth-child(5) > div > span'
    let headingselector4='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div:nth-child(7) > div > span'
    let jsimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > figure > span > picture > img'
    let ajsimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > figure > span > picture > img'
    let rnimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > figure > span > picture > img'
    let figmaimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div > figure > span > picture > img'
    let tsimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div > figure > span > picture > img'
    let vueimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div > figure > span > picture > img'
    let flutterimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(5) > div:nth-child(3) > div > figure > span > picture > img'
    let drawimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(4) > div > figure > span > picture > img'
    let nodeimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div > figure > span > picture > img'
    let reactimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div > figure > span > picture > img'
    let adobeimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(5) > div:nth-child(4) > div > figure > span > picture > img'
    let nextimgselector='#my-work > div > div > div > div.zpelement.zpelem-tabs > div > div.zptabs-content-container > div.zpelement.zptab-content.zptab-active-content > div > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div > figure > span > picture > img'
    cy.get(headingselector).should('include.text','Our Specialization')
    cy.get(headingselector1).should('include.text','All')
    cy.get(headingselector2).should('include.text','Design')
    cy.get(headingselector3).should('include.text','Web')
    cy.get(headingselector4).should('include.text','Native')
    cy.get(jsimgselector).should('have.attr','src').and('contains','/files/apps/hhhhhhhhhh.png')
    cy.get(ajsimgselector).should('have.attr','src').and('contains','/files/apps/optimized_angular_137x92.png')
    cy.get(rnimgselector).should('have.attr','src').and('contains','/files/apps/optimized_rn_119x119.png')
    cy.get(figmaimgselector).should('have.attr','src').and('contains','/files/apps/optimized_figma_139x139.png')
    cy.get(tsimgselector).should('have.attr','src').and('contains','/files/apps/optimized_ts_97x97.png')
    cy.get(vueimgselector).should('have.attr','src').and('contains','/files/apps/optimized_vuejs_167x117.png')
    cy.get(flutterimgselector).should('have.attr','src').and('contains','/files/apps/fluff-1.png')
    cy.get(drawimgselector).should('have.attr','src').and('contains','/files/apps/optimized_Draw.io-Draw-Diagrams-Online-removebg-preview_100x123.png')
    cy.get(nodeimgselector).should('have.attr','src').and('contains','/files/apps/optimized_node_119x119.png')
    cy.get(reactimgselector).should('have.attr','src').and('contains','/files/apps/optimized_react_113x113.png')
    cy.get(adobeimgselector).should('have.attr','src').and('contains','/files/apps/optimized_A-1_220x110.png')
    cy.get(nextimgselector).should('have.attr','src').and('contains','/files/apps/optimized_next_100x100.jpg')
  })
 it('To verify whatsapp and linkedin logos are visible',()=>{
  let linkedimgselector= '#thememaincontent > div:nth-child(13) > div > div > div:nth-child(3) > div > div > figure > a > picture > img'
  let whatsappimgselector='#thememaincontent > div:nth-child(13) > div > div > div:nth-child(5) > div > div > figure > a > picture > img'
  cy.get(linkedimgselector).should('have.attr','src').and('contains','/files/apps/optimized_lin-removebg-preview -3-_107x107.png')
  cy.get(whatsappimgselector).should('have.attr','src').and('contains','/files/apps/optimized_wh_108x108.png')
 })
 it('To verify three sectors named Address ,Phone ,Email Id with logo and content are visible',()=>{
  let addressheadingselector1='#thememaincontent > div.zpsection.zplight-section.zplight-section-bg.zpbackground-size-cover.zpbackground-position-center-center.zpbackground-repeat-all.zpbackground-attachment-scroll > div > div > div:nth-child(2) > div > div > h3'
  let emailheadingselector='#thememaincontent > div.zpsection.zplight-section.zplight-section-bg.zpbackground-size-cover.zpbackground-position-center-center.zpbackground-repeat-all.zpbackground-attachment-scroll > div > div > div:nth-child(3) > div > div > h3'
  let phoneheadingselector='#thememaincontent > div.zpsection.zplight-section.zplight-section-bg.zpbackground-size-cover.zpbackground-position-center-center.zpbackground-repeat-all.zpbackground-attachment-scroll > div > div > div:nth-child(4) > div > div > h3'
  cy.get(addressheadingselector1).should('have.text','Address')
  cy.get(emailheadingselector).should('have.text','Email')
  cy.get(phoneheadingselector).should('have.text','Phone')
 })
 it('To verify company header is visible at bottom left of the page',()=>{
  let imgheaderselector='body > div.theme-footer-area.zpdark-section.zpdark-section-bg > div > div > div > div > div > div:nth-child(2) > div > div > figure > span > picture > img'
  cy.get(imgheaderselector).should('have.attr','src').and('contains','/files/optimized_Zhapix guindy branch  -2-_400x52.png')
 })
 it('To verify copyright notice is visible at bottom right of the page',()=>{
  let crselector='body > div.theme-footer-area.zpdark-section.zpdark-section-bg > div > div > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(1) > p'
  cy.get(crselector).should('contain.text','2025')
 })
})

 describe('Verify "Our Location" text formats',()=>{
    beforeEach('Our Location',()=>{
  cy.visit('https://www.zhapix.com/contact')
 })
 it('Verify font, alignment, and spacing are consistent and readable of "Our Location"',()=>{
  let headingselector='#thememaincontent > div:nth-child(1) > div > div > div:nth-child(2) > div.zpelement.zpelem-heading > h2 > span'
  cy.get(headingselector).should('have.text','Our Location')
 })
 it('Verify "Registered Address" heading and section details are visible',()=>{
  let headingselector='#thememaincontent > div:nth-child(3) > div > div > div > div.zpelement.zpelem-heading > h2 > div > h1 > span'
  cy.get(headingselector).should('have.text','REGISTERED OFFICE')
 })
 it('To verify the the copyright notice is visible at bottom right of the page',()=>{
  let crselector='#thememaincontent > div:nth-child(4) > div > div > div > div > div > div > div:nth-child(1) > p > span'
  cy.get(crselector).should('contain.text','2025')
 })
 })
