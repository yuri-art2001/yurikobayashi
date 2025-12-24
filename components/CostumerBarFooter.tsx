'use client'
// components/CostumeDesignerBar.jsx

export default function CostumeDesignerBar() {

    return (
        <div className="w-[100%] bg-white " >
          <div  className="flex justify-start items-center  bg-white py-4 sm:pl-3 sm:pr-3 pl-2 pr-2 sm:pl-8 sm:ph-8">
            {/* Linha esquerda */}
            <div className="h-[2px] w-5 sm:w-10 bg-red-600"></div>
      
            {/* Texto COSTUME DESIGNER */}
            <span className="text-cente mx-2 text-[12px] sm:text-[16px] font-semibold tracking-wide text-red-600">
              BIO
            </span>
      
            {/* Pontos centrais */}
            <div className="flex items-center gap-[4px] sm:gap-[6px] mx-3 ml-0 mr-0">
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600 hidden sm:visible"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600 hidden sm:visible"></div>
            </div>
      
            {/* Linha central curta */}
            <div className="h-[2px] w-20 bg-red-600 mx-2"></div>
      
            {/* Texto FIGURINISTA */}
            <h3 className="text-[12px] sm:text-[16px] font-semibold tracking-wide text-red-600">
              PORTFÓLIO
            </h3>
      
            {/* Círculo final */}
            <div className="h-5 w-6 sm:w-6 sm:h-6 rounded-full bg-red-600 ml-3 animate-bounce"></div>
          </div>
      </div>
    );
  }