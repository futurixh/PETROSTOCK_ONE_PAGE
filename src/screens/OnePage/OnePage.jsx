import React from "react";
import { DivWrapper } from "../../components/DivWrapper";
import { IconsFillSystem } from "../../components/IconsFillSystem";
import { IconsFillSystemWrapper } from "../../components/IconsFillSystemWrapper";
import { IconsFillSystemDownload2Fill } from "../../icons/IconsFillSystemDownload2Fill";
import { IconsFillSystemStarFill1 } from "../../icons/IconsFillSystemStarFill1";
import { IconsFillSystemThumbUpFill } from "../../icons/IconsFillSystemThumbUpFill";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";



export const OnePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col  relative bg-[#ffffff]">
      <nav className="bg-[#000a470d] justify-center">
        <div className="ml-[165px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[40]">
          <div className="h-16 jsutify-center">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <img
                  className=" w-[248px] h-[26px] top-[29px] left-[59px]"
                  src="https://c.animaapp.com/4pU02LkT/img/group-1000001584@2x.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block pr-[7px]">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-text-color text-center relative w-fit mr-[50px] mt-[-1.00px] text-bold font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]"
                  >
                    Nous contacter
                  </a>

                  <button className="border-0 ">
                    <div className="inline-flex items-center gap-[15px] px-[25px] py-[15px] relative bg-main-red rounded-[5px] overflow-hidden">
                      <a href="" className="text-light-text-color relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                        Télécharger
                      </a>
                      <img
                        className=" w-[12px] h-[10px]"
                        alt="Icn arrow right icn"
                        src="https://c.animaapp.com/4pU02LkT/img/icn-arrow-right--icn-xs.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-main-red inline-flex items-center border-0 justify-center p-2 rounded-md text-white hover:text-black hover:bg-main-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-main-red focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-black bg-white border-0 hover:bg-main-red hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Nous contacter
                </a>

                <a
                  href="#"
                  className="text-baclk bg-white border-0 hover:bg-main-red hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Télécharger
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div className="relative h-[747px] bg-[#000a470d]">
        {/*<div className="absolute h-[91px] top-0 left-[59px]">
          <div className="relative h-[91px]">
            <div className="absolute h-[14px] top-[39px] " />
            <div className="absolute h-[58px] top-[16px] right-[136px] left-[136px]">
              <div className="absolute h-[58px] top-0 left-[228px]">
                <div className="flex items-center gap-[45px] relative top-[3px] left-[457px]">
                  <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-main-blue text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                      Nous contacter
                    </div>
                  </div>
                  <div className="relative h-[52px] mr-[-37.00px]">
                    <div className="inline-flex items-center gap-[15px] px-[25px] py-[15px] relative bg-main-red rounded-[5px] overflow-hidden">
                      <div className="text-light-text-color relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                        Télécharger
                      </div>
                      <img
                        className="relative w-[12px] h-[10px] justi"
                        alt="Icn arrow right icn"
                        src="https://c.animaapp.com/4pU02LkT/img/icn-arrow-right--icn-xs.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[248px] h-[26px] top-[29px] left-0"
                alt="Group"
                src="https://c.animaapp.com/4pU02LkT/img/group-1000001584@2x.png"
              />
            </div>
          </div>
        </div>*/}
        <div className=" h-[682px] top-[95px] left-0">
          <div className="flex  items-center justify-between relative">
            <div className="left-[195px] items-start justify-start gap-[30px] flex flex-col relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-main-red text-[16px] tracking-[0.10px] leading-[24px] whitespace-nowrap">
                Rejoignez -nous
              </div>
              <p className="relative w-[542px] h-[160px] [font-family:'Montserrat',Helvetica] font-bold text-main-blue text-[58px] tracking-[0.20px] leading-[80px]">
                Faites le plein avec Pétrostock
              </p>
              <p className="relative w-[542px] [font-family:'Montserrat',Helvetica] font-normal text-text-color text-[20px] tracking-[0.20px] leading-[30px]">
                Du carburant à porter de main, obtenez de l'essence à portée de main pour vos besoins quotidiens.
              </p>
              <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                <button className="border-0 inline-flex flex-col items-center gap-[10px] px-[40px] py-[15px] relative flex-[0_0_auto] bg-main-red rounded-[5px] overflow-hidden">
                  <a className="text-light-text-color text-center relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                    Télécharger
                  </a>
                </button>
                <button className="inline-flex flex-col items-center gap-[10px] px-[40px] py-[15px] relative flex-[0_0_auto] rounded-[5px] overflow-hidden border border-solid border-main-blue">
                  <a className="text-text-color text-center relative w-fit mt-[-1.00px] font-btn-text font-[number:var(--btn-text-font-weight)] text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] whitespace-nowrap [font-style:var(--btn-text-font-style)]">
                    Nous contacter
                  </a>
                </button>
              </div>
            </div>
            <div className="relative w-[704px] h-[682px] justify-end right-[0px]">
              <div className="h-[682px] overflow-hidden">
                <div className="relative w-[723px] h-[751px] left-[-38px]">
                  <div className="relative h-[683px] top-[63px] left-[68px]">
                    <img
                      className="absolute h-[511px] top-[100px] left-0"
                      alt="Calque"
                      src="https://c.animaapp.com/4pU02LkT/img/calque-1.svg"
                    />
                    <img
                      className="absolute  h-[631px] top-0 left-[136px]"
                      alt="Group"
                      src="https://c.animaapp.com/4pU02LkT/img/group-1000001585.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[100px] px-0 pl-[198px] pr-[157px] py-[80px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[287.17px] h-[150px]">
          <div className="relative w-[300px] h-[150px]">
            <p className="absolute w-[264px] top-0 left-0 [font-family:'Bai_Jamjuree',Helvetica] font-bold text-main-blue text-[35px] tracking-[0] leading-[42px]">
              Du carburant à porter de main
            </p>
            <p className="w-[279px] top-[102px] absolute left-0 font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#5f5f64] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
            Trouvez le carburant dont vous avez besoin dans plus de 15000 stations disponibles.
            </p>
            <img
              className="absolute w-[73px] h-[79px] top-[28px] left-[227px]"
              alt="Fire"
              src="https://c.animaapp.com/4pU02LkT/img/fire--1--1.svg"
            />
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[26px] relative flex-[0_0_auto]">
          <div className="relative w-[229.19px] h-[159px]">
            <img
              className="absolute w-[38px] h-[38px] top-0 left-0"
              alt="Icon park solid"
              src="https://c.animaapp.com/4pU02LkT/img/icon-park-solid-sales-report.svg"
            />
            <div className="absolute w-[177px] top-[65px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#17181a] text-[20px] tracking-[0.20px] leading-[28px]">
              Prix abordable
            </div>
            <p className="absolute w-[225px] top-[111px] left-0 font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#5f5f64] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
              Profitez de nos prix compétitifs pour économiser sur chaque plein.
            </p>
          </div>
          <div className="relative w-[229.23px] h-[159px]">
            <img
              className="absolute w-[38px] h-[38px] top-0 left-0"
              alt="Ri price tag fill"
              src="https://c.animaapp.com/4pU02LkT/img/ri-price-tag-2-fill.svg"
            />
            <div className="absolute w-[164px] top-[65px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#17181a] text-[20px] tracking-[0.20px] leading-[28px]">
              2000 Vendeurs
            </div>
            <p className="absolute w-[225px] top-[111px] left-0 font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#5f5f64] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
              Choisissez parmi 500 vendeurs de confiance.
            </p>
          </div>
          <div className="relative w-[238.42px] h-[159px] mr-[-4.00px]">
            <img
              className="absolute w-[38px] h-[38px] top-0 left-0"
              alt="Solar gas station"
              src="https://c.animaapp.com/4pU02LkT/img/solar-gas-station-bold.svg"
            />
            <div className="absolute w-[145px] top-[65px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#17181a] text-[20px] tracking-[0.20px] leading-[28px]">
              2000 stations
            </div>
            <p className="w-[234px] top-[111px] absolute left-0 font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#5f5f64] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
              Trouvez une station près de chez vous en tout temps.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[60px] pl-[198px] pr-[157px] py-[92px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-main-blue text-[40px] tracking-[0.20px] leading-[57px] whitespace-nowrap">
            A propos de notre application
          </p>
          <p className="w-[601px] h-[70px] relative font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-gray-paragraph text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
          Notre application Petrostock est conçue pour vous offrir la meilleure expérience d'achat de carburant. 
          Que vous cherchiez une station à proximité, souhaitiez comparer les prix ou acheter du carburant de qualité, 
          nous avons tout ce dont vous avez besoin.
          </p>
        </div>
        <div className="inline-flex items-center justify-center gap-[92px] relative flex-[0_0_auto]">
          <img
            className="relative w-[386px] h-[465px]"
            alt="Android smartphone"
            src="https://c.animaapp.com/4pU02LkT/img/android-smartphone-free-mockup-1@2x.png"
          />
          <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
            <div className="relative w-[574px] h-[160px] mr-[-4.00px]">
              <div className="relative w-[570px] h-[160px] bg-[#ffffff] rounded-[10px] shadow-[0px_1px_10px_#0000001a]">
                <IconsFillSystem className="!absolute bg-[url(https://c.animaapp.com/4pU02LkT/img/icons-checkbox-circle-fill.svg)] !left-[18px] !top-[30px]" />
                <p className="absolute top-[30px] left-[59px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                  <span className="[font-family:'Josefin_Sans',Helvetica] font-semibold text-[#232233] text-[20px] tracking-[0] leading-[30px]">
                    Localiser une station proche
                  </span>
                </p>
                <p className="absolute w-[491px] top-[72px] left-[59px] font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-gray-paragraph text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
                Localiser une station proche est plus facile que jamais avec notre application.
                </p>
              </div>
            </div>
            <div className="relative w-[574px] h-[160px] mr-[-4.00px]">
              <div className="relative w-[570px] h-[160px] bg-[#ffffff] rounded-[10px] shadow-[0px_1px_10px_#0000001a]">
                <IconsFillSystemWrapper className="bg-[url(https://c.animaapp.com/4pU02LkT/img/icons-checkbox-circle-fill.svg)] !absolute !left-[18px] !top-[30px]" />
                <p className="absolute top-[30px] left-[60px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                  <span className="[font-family:'Josefin_Sans',Helvetica] font-semibold text-[#232233] text-[20px] tracking-[0] leading-[30px]">
                    Faites un comparatifs des prix
                  </span>
                </p>
                <p className="absolute w-[491px] top-[72px] left-[59px] font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-gray-paragraph text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
                Comparez les prix du carburant en un instant, choisissez la qualité.
                </p>
              </div>
            </div>
            <div className="relative w-[574px] h-[160px] mr-[-4.00px]">
              <div className="relative w-[570px] h-[160px] bg-[#ffffff] rounded-[10px] shadow-[0px_1px_10px_#0000001a]">
                <DivWrapper className="bg-[url(https://c.animaapp.com/4pU02LkT/img/icons-checkbox-circle-fill.svg)] !absolute !left-[18px] !top-[30px]" />
                <p className="absolute top-[30px] left-[60px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                  <span className="[font-family:'Josefin_Sans',Helvetica] font-semibold text-[#232233] text-[20px] tracking-[0] leading-[30px]">
                  Acheter du carburant de qualité
                  </span>
                </p>
                <p className="absolute w-[491px] top-[72px] left-[59px] font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-gray-paragraph text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
                  Assurez-vous de mettre de la qualité dans votre réservoir avec Petrostock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[717px] overflow-hidden relative justify-center bg-[#ffffff]">
        <div className="flex flex-col justify-center items-center gap-[80px] px-0 py-[160px] relative top-[-104px]">
          <div className="flex flex-col w-[692px] items-center relative flex-[0_0_auto]">
            <div className="flex flex-col w-[691px] items-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-violet text-[14px] text-center tracking-[0.20px] leading-[24px] whitespace-nowrap">
                Petrostock
              </div>
              <div className="relative w-fit font-h-2 font-[number:var(--h-2-font-weight)] text-text-color text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] whitespace-nowrap [font-style:var(--h-2-font-style)]">
                Comment ça marche
              </div>
              <p className="w-fit [font-family:'Montserrat',Helvetica] text-text-color text-[14px] tracking-[0.20px] leading-[20px] whitespace-nowrap relative font-normal text-center">
                Un tutoriel pour vous faciliter la vie
              </p>
            </div>
          </div>
          <div className="flex w-[688px] items-start justify-center gap-[30px] relative flex-[0_0_auto]">
            <div className="w-[688px] items-center flex flex-col relative">
              <div className="relative w-[688px] h-[363px] bg-light-text-color">
                <div className="relative h-[363px]">
                  <div className="absolute w-[688px] h-[363px] top-0 left-0">
                    <div className="relative h-[363px]">
                      <img
                        className="absolute w-[686px] h-[363px] top-0 left-[2px] object-cover"
                        alt="Image"
                        src="https://c.animaapp.com/4pU02LkT/img/image-530.png"
                      />
                      <div className="absolute w-[688px] h-[363px] top-0 left-0 [background:linear-gradient(180deg,rgba(0,0,0,0)_14.58%,rgba(56.31,56.31,56.31,0.84)_100%)]" />
                    </div>
                  </div>
                  <button>
                    <img
                    className="absolute w-[93px] h-[93px] top-[136px] left-[297px]"
                    alt="Button button btn"
                    src="https://c.animaapp.com/4pU02LkT/img/button-button-btn-primary-color-btn-circle-btn-lg-sec-.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative self-stretch w-full h-[641px] bg-[#ffffff] overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-[80px] pt-[92px] pb-[160px] px-0 relative">
          <div className="flex flex-col w-[692px] items-center relative flex-[0_0_auto]">
            <div className="w-[691px] overflow-hidden flex flex-col items-center gap-[10px] relative flex-[0_0_auto]">
              <p className="relative w-[761px] mt-[-1.00px] ml-[-35.00px] mr-[-35.00px] [font-family:'Montserrat',Helvetica] font-bold text-main-blue text-[40px] text-center tracking-[0.20px] leading-[57px]">
                Des partenaires officiels de confiance
              </p>
              <p className="relative w-[681px] font-paragraph font-[number:var(--paragraph-font-weight)] text-[#727272] text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Ils nous ont fait confiance en nous accompagnant de la conception au lancement de ce projet, faites de
                même
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
            <div className="w-[328px] flex flex-col items-center relative">
              <div className="w-[325px] items-center gap-[10px] px-[40px] py-[30px] flex-[0_0_auto] bg-[#f9f9f9] rounded-[5px] overflow-hidden border border-solid border-[#e8e8e8] flex flex-col relative">
                <img
                  className="relative h-[45.53px]"
                  alt="Icn resize icn xl"
                  src="https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/225158923_104906565227056_6972544066298119851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEas9lQi22FhBM4aOHaz5o6vj9x_P7LAIa-P3H8_ssAhrPFl0Ll80ugNeKSfNH_aYeIVc41BMJSmnAoKhw7IpGG&_nc_ohc=nQZ36B_t0GMAX8hc07w&_nc_ht=scontent-lhr8-2.xx&oh=00_AfD_nJb5AZXnmLlw6yOlKarRCumGZx71SK7j4OypeWT-4A&oe=653C18FB"
                />
                <div className="w-fit text-text-color whitespace-nowrap relative font-h-5 font-[number:var(--h-5-font-weight)] text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                  Dépôt pétrolier du Bénin
                </div>
              </div>
            </div>
            <div className="w-[329px] items-center flex flex-col relative">
              <div className="flex flex-col w-[325px] gap-[10px] px-[40px] py-[30px] flex-[0_0_auto] bg-main-red rounded-[5px] overflow-hidden items-center relative">
                <img
                  className="relative h-[65.53px]"
                  alt="Icn resize icn xl"
                  src="https://www.gouv.bj/images/095230752747001675069962.png"
                />
                <p className="w-[292px] ml-[-23.50px] mr-[-23.50px] text-light-text-color relative font-h-5 font-[number:var(--h-5-font-weight)] text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                  Gouvernement de la République du Bénin
                </p>
              </div>
            </div>
            <div className="w-[329px] items-center flex flex-col relative">
              <div className="w-[325px] items-center gap-[10px] px-[40px] py-[30px] flex-[0_0_auto] bg-[#f9f9f9] rounded-[5px] overflow-hidden border border-solid border-[#e8e8e8] flex flex-col relative">
                <img
                  className="relative  h-[45.53px]"
                  alt="Icn resize icn xl"
                  src="https://anm-benin.com/fr/wp-content/uploads/2020/11/logo-ANM.png"
                />
                <div className="w-fit ml-[-10.50px] mr-[-10.50px] text-text-color whitespace-nowrap relative font-h-5 font-[number:var(--h-5-font-weight)] text-[length:var(--h-5-font-size)] text-center tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                  Agence Nationale de Métrologie
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative self-stretch justify-center w-full h-[655px] bg-light-gray-1 overflow-hidden">
        <div className="flex flex-col justify-center items-center gap-[80px] px-0 py-[112px] relative">
          <div className="flex flex-col w-[607px] items-center relative flex-[0_0_auto]">
            <div className="w-[607px] flex flex-col items-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-main-blue text-[40px] tracking-[0.20px] leading-[57px] whitespace-nowrap">
                Que disent nos utilisateurs
              </div>
              <p className="w-[585px] font-josefin-16 text-gray-paragraph text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] relative font-[number:var(--josefin-16-font-weight)] text-center [font-style:var(--josefin-16-font-style)]">
                Découvrez ce que les utilisateurs disent sur Petrostock.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
            <div className="w-[330px] flex flex-col items-center relative">
              <div className="inline-flex px-[35px] py-[30px] flex-[0_0_auto] bg-light-background-color rounded-[5px] border border-solid border-[#dedede] items-center relative">
                <div className="w-[257px] items-start gap-[20px] flex flex-col relative">
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Stars"
                    src="https://c.animaapp.com/4pU02LkT/img/stars-2.svg"
                  />
                  <p className="relative w-fit font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#727272] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
                  "La qualité du carburant est cruciale pour mes véhicules. Petrostock m'aide à 
                  localiser les mini-stations au Bénin. C'est une application inestimable."
                  </p>
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex h-[50px] items-center gap-[15px] relative flex-[0_0_auto]">
                      <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/4pU02LkT/img/-user-1.png)] bg-cover bg-[50%_50%]" />
                      <div className="flex-col items-start inline-flex relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-link font-[number:var(--link-font-weight)] text-main-red text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                          Félix Azoubilé
                        </div>
                        <div className="relative w-fit font-h-6 font-[number:var(--h-6-font-weight)] text-main-blue text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
                          Passionné de véhicules
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[329px] items-center flex flex-col relative">
              <div className="inline-flex px-[35px] py-[30px] flex-[0_0_auto] bg-light-background rounded-[5px] border border-solid border-[#dedede] items-center relative">
                <div className="w-[257px] items-start gap-[20px] flex flex-col relative">
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Stars"
                    src="https://c.animaapp.com/4pU02LkT/img/stars-1.svg"
                  />
                  <p className="relative w-fit font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#727272] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
                  "Les mini-stations ont grandement amélioré ma vie en tant que chauffeur au Bénin. La garantie de qualité du carburant
                   et la disponibilité constante rendent mon travail beaucoup plus facile. Merci Petrostock !"
                  </p>
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="h-[50px] items-center gap-[15px] inline-flex relative flex-[0_0_auto]">
                      <div className="bg-[url(https://c.animaapp.com/4pU02LkT/img/-user-2.png)] relative w-[50px] h-[50px] bg-cover bg-[50%_50%]" />
                      <div className="flex-col items-start inline-flex relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-link font-[number:var(--link-font-weight)] text-main-red text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                          Sébastien Kossi
                        </div>
                        <div className="relative w-fit font-h-6 font-[number:var(--h-6-font-weight)] text-main-blue text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
                          Chauffeur de taxi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[329px] items-center flex flex-col relative">
              <div className="inline-flex px-[35px] py-[30px] flex-[0_0_auto] bg-light-background rounded-[5px] border border-solid border-[#dedede] items-center relative">
                <div className="w-[257px] items-start gap-[20px] flex flex-col relative">
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Stars"
                    src="https://c.animaapp.com/4pU02LkT/img/stars.svg"
                  />
                  <p className="relative w-fit font-josefin-16 font-[number:var(--josefin-16-font-weight)] text-[#727272] text-[length:var(--josefin-16-font-size)] tracking-[var(--josefin-16-letter-spacing)] leading-[var(--josefin-16-line-height)] [font-style:var(--josefin-16-font-style)]">
                  "En tant que voyageur fréquent au Bénin, Petrostock est devenu mon fidèle compagnon. 
                  Cette application me permet de la trouver rapidement où que j'aille. 
                  C'est un must-have pour les voyageurs."
                  </p>
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="h-[50px] items-center gap-[15px] inline-flex relative flex-[0_0_auto]">
                      <div className="bg-[url(https://c.animaapp.com/4pU02LkT/img/-user-3.png)] relative w-[50px] h-[50px] bg-cover bg-[50%_50%]" />
                      <div className="flex-col items-start inline-flex relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-link font-[number:var(--link-font-weight)] text-main-red text-[length:var(--link-font-size)] tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)] whitespace-nowrap [font-style:var(--link-font-style)]">
                          Kemi ADAMAN
                        </div>
                        <div className="relative w-fit font-h-6 font-[number:var(--h-6-font-weight)] text-main-blue text-[length:var(--h-6-font-size)] tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] whitespace-nowrap [font-style:var(--h-6-font-style)]">
                          Voyageurs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[516px] items-center justify-center gap-[63px] relative self-stretch w-full">
        <div className="flex flex-col w-[596px] h-[381px] items-start gap-[58px] relative">
          <div className="inline-flex flex-col items-start gap-[21px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-black text-[40px] tracking-[0.20px] leading-[57px] whitespace-nowrap">
              Télécharger maintenant
            </div>
            <p className="w-[570px] h-[87px] relative font-h7-16px-paragraph-text font-[number:var(--h7-16px-paragraph-text-font-weight)] text-gray-paragraph text-[length:var(--h7-16px-paragraph-text-font-size)] tracking-[var(--h7-16px-paragraph-text-letter-spacing)] leading-[var(--h7-16px-paragraph-text-line-height)] [font-style:var(--h7-16px-paragraph-text-font-style)]">
              Téléchargez dès maintenant l'application Petrostock et commencez à économiser sur vos pleins de carburant.
            </p>
            <div className="relative w-[325px] h-[47px]">
              <img
                className="absolute w-[151px] h-[45px] top-px left-[174px]"
                alt="Pngitem"
                src="https://c.animaapp.com/4pU02LkT/img/pngitem-1144050-3@2x.png"
              />
              <img
                className="absolute w-[149px] h-[47px] top-0 left-0"
                alt="Toppng"
                src="https://c.animaapp.com/4pU02LkT/img/toppng-2@2x.png"
              />
            </div>
          </div>
          <div className="inline-flex items-start gap-[12.51px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-[99.03px] h-[61.5px] justify-center gap-[3.13px] px-[20.85px] py-[15.64px] bg-main-green rounded-[2.61px] overflow-hidden items-center relative">
              <IconsFillSystemDownload2Fill className="!relative !w-[18.24px] !h-[18.24px] !mt-[-11.63px]" />
              <div className="relative w-fit [font-family:'Josefin_Sans',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                59865
              </div>
              <div className="relative w-fit mb-[-11.11px] ml-[-9.33px] mr-[-9.33px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-white text-[10.4px] tracking-[0] leading-[15.6px] whitespace-nowrap">
                Téléchargement
              </div>
            </div>
            <div className="flex flex-col w-[99.03px] h-[61.5px] justify-center gap-[3.13px] px-[20.85px] py-[15.64px] bg-main-green rounded-[2.61px] overflow-hidden items-center relative">
              <IconsFillSystemThumbUpFill className="!relative !w-[18.24px] !h-[18.24px] !mt-[-11.63px]" />
              <div className="relative w-fit [font-family:'Josefin_Sans',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                29852
              </div>
              <div className="relative w-fit mb-[-11.11px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-white text-[10.4px] tracking-[0] leading-[15.6px] whitespace-nowrap">
                Like
              </div>
            </div>
            <div className="flex flex-col w-[99.03px] h-[61.5px] justify-center gap-[3.13px] px-[20.85px] py-[15.64px] bg-main-green rounded-[2.61px] overflow-hidden items-center relative">
              <IconsFillSystemStarFill1 className="!relative !w-[18.24px] !h-[18.24px] !mt-[-11.63px]" />
              <div className="relative w-fit [font-family:'Josefin_Sans',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                1500
              </div>
              <div className="relative w-fit mb-[-11.11px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-white text-[10.4px] tracking-[0] leading-[15.6px] whitespace-nowrap">
                Avis
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[364px] h-[449px]">
          <div className="relative h-[449px]">
            <div className="absolute w-[161px] h-[55px] top-[340px] left-[86px] bg-white rounded-[80.54px/27.54px] shadow-effect-1" />
            <img
              className="absolute w-[364px] h-[449px] top-0 left-0 object-cover"
              alt="Gravity scene iphone"
              src="https://c.animaapp.com/4pU02LkT/img/gravity-scene-iphone-12-mockup-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="h-[594px] relative justify-center bg-[#ffffff]">
        <div className="flex flex-col justify-center items-center gap-[80px] px-0 py-[160px] relative">
          <div className="flex flex-col justify-center items-center relative flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-main-red text-[14px] text-center tracking-[0.20px] leading-[24px] whitespace-nowrap">
                Newsletter
              </div>
              <div className="relative w-fit font-h-2 font-[number:var(--h-2-font-weight)] text-text-color text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] whitespace-nowrap [font-style:var(--h-2-font-style)]">
                Rejoignez nous
              </div>
              <p className="relative w-[408px] [font-family:'Montserrat',Helvetica] font-normal text-text-color text-[14px] text-center tracking-[0.20px] leading-[20px]">
                Restez connecté avec Petrostock en vous abonnant à notre newsletter.
              </p>
            </div>
          </div>
          <div className="inline-flex items-start justify-center gap-[30px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
              <div className="relative w-[688px] h-[58px]">
                <div className="h-[58px]">
                  <div className="relative w-[688px] h-[58px] rounded-[5px]">
                    <input placeholder="Votre email" className="absolute placeholder-gray-500 [font-family:'Montserrat',Helvetica] font-normal text-second-text-color text-[14px] tracking-[0.20px] leading-[28px] whitespace-nowrap w-[688px] h-[58px] top-0 p-5 bg-[#f8f8f8] rounded-[5px] overflow-hidden border border-solid border-[#e6e6e6]">
                    </input>
                    <button className="relative rounded-[5px] border-0 left-[26px] tracking-[0.20px] leading-[28px] whitespace-nowrap bg-main-red absolute w-[117px] h-[58px]  top-0 left-[571px]">
                      <a className="[font-family:'Montserrat',Helvetica] font-normal text-light-text-color text-[14px] text-center" href="">Souscrire</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-[369px] items-center justify-center gap-[243px_84px] relative">
        <div className="inline-flex flex-col items-start justify-center gap-[19px] pt-[37px] pb-[85px] px-0 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-x-1st text-[44px] tracking-[0] leading-[normal]">
            Petrostock.
          </div>
          <p className="relative w-[204px] [font-family:'Montserrat',Helvetica] font-normal text-text-color text-[14px] tracking-[0.20px] leading-[20px]">
            Du carburant à porter de main
          </p>
        </div>
        <div className="w-[89px] relative h-[151px]">
          <div className="w-[97px] relative h-[151px]">
            <div className="absolute top-0 left-px [font-family:'Poppins',Helvetica] font-bold text-black-1 text-[21px] tracking-[0] leading-[26.1px] whitespace-nowrap">
              Contact
            </div>
            <div className="absolute top-[58px] left-0 [font-family:'Poppins',Helvetica] font-medium text-text-clr text-[18px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Help/FAQ
            </div>
            <div className="absolute top-[94px] left-0 [font-family:'Poppins',Helvetica] font-medium text-text-clr text-[18px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Press
            </div>
            <div className="absolute top-[129px] left-0 [font-family:'Poppins',Helvetica] font-medium text-text-clr text-[18px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Condition générale <br/> d'utilisation
            </div>
          </div>
        </div>
        <div className="relative w-[214px] h-[147px]">
          <img
            className="absolute w-[197px] h-[65px] top-[-8px] left-[-8px]"
            alt="Social"
            src="https://c.animaapp.com/4pU02LkT/img/social@2x.png"
          />
          <div className="absolute w-[216px] h-[76px] top-[71px] left-0">
            <div className="absolute top-0 left-[2px] [font-family:'Poppins',Helvetica] font-medium text-text-clr text-[20px] tracking-[0.10px] leading-[24.9px] whitespace-nowrap">
              Découvrez nous
            </div>
            <div className="absolute w-[107px] h-[35px] top-[41px] left-0 bg-black-1 rounded-[17.5px]">
              <img
                className="absolute w-[20px] h-[20px] top-[7px] left-[17px]"
                alt="Google play"
                src="https://c.animaapp.com/4pU02LkT/img/google-play-1.svg"
              />
              <img
                className="absolute w-[54px] h-[15px] top-[9px] left-[42px]"
                alt="Vector"
                src="https://c.animaapp.com/4pU02LkT/img/vector-1.svg"
              />
            </div>
            <div className="absolute w-[100px] h-[35px] top-[41px] left-[114px] bg-black-1 rounded-[17.5px]">
              <img
                className="absolute w-[13px] h-[16px] top-[8px] left-[17px]"
                alt="Apple"
                src="https://c.animaapp.com/4pU02LkT/img/apple--2--1@2x.png"
              />
              <img
                className="absolute w-[54px] h-[17px] top-[9px] left-[36px]"
                alt="Vector"
                src="https://c.animaapp.com/4pU02LkT/img/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[311px] justify-center [font-family:'Poppins',Helvetica] font-medium text-text-clr text-[14px] tracking-[0] leading-[17.4px] whitespace-nowrap">
          All rights reserved @petrostock
        </div>
      </div>
    </div>
  );
};
