export default function DesktopStyles(){
    return (
        <style global jsx>{`
            html{
                scroll-behavior: smooth;
            }
            .container__personagem{
                padding: 0 3%;
                margin: 0 auto;
                max-width: 1280px;
                position: relative;
            }
            .personagem{
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                z-index: 4;
                top: 60px;
                left: 52px;
            }
            .perfil-img{
                margin-right: 40px;
            }
            .perfil-img img{
                width: 370px;
            }
            .personagem-info{
                width: 60%;
                color: white;
            }
            .personagem-info h1{
                margin-bottom: 10px;
            }
            .personagem-info p{
                max-width: 450px;
                margin-top: 10px;
            }
            .preview-fotos-wrapper{
                width: 550px;
                position: relative;
                z-index: 4;
                overflow-x: hidden;
                overflow-y: hidden;
                scroll-behavior: smooth;
            }
            .preview-fotos-scroll{
                display: flex;
                align-items: center;
                padding: 7px 4px;
                width: 395%;
            }
            .preview-fotos-single{
                padding: 0 5px;
            }
            .preview-fotos-single > img{
                width: 100%;
                cursor: pointer;
            }
            .arrow-slider{
                display: flex;
                position: absolute;
                left: 0;
                top: 460px;
                z-index: 5;
                margin-left: 3%;
            }
            .arrow-left{
                width: 36px;
                height: 36px;
                margin-top: 35px;
                margin-right: 8px;
                cursor: pointer;
            }
            .arrow-right{
                width: 36px;
                height: 36px;
                margin-top: 35px;
                margin-left: 8px;
                cursor: pointer;
            }

            @media screen and (max-width: 1130px){
                .personagem-info p{
                    max-width: 410px;
                }
            }
        `}</style>
    )
}