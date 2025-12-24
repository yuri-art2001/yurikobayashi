'use client'

export default function CostumeDesignerBar() {
  return (
    <div className="w-full bg-white overflow-hidden relative">
      <div 
        className="flex"
        style={{
          animation: 'marquee-scroll 90s linear infinite',
          display: 'flex',
        }}
      >
        {/* Conteúdo repetido várias vezes para criar o efeito contínuo */}
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className="flex justify-start items-center bg-white py-4 pl-3 pr-3 sm:pl-8 sm:pr-8 flex-shrink-0"
          >
            {/* Linha esquerda */}
            <div className="h-[2px] w-5 sm:w-10 bg-red-600"></div>
      
            {/* Texto */}
            <span className="text-cente mx-2 text-[12px] sm:text-[16px] font-semibold tracking-wide text-red-600">
              roupa é segunda pele
            </span>
      
            {/* Pontos centrais */}
            <div className="flex items-center gap-[6px] mx-3">
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600 hidden sm:block"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600 hidden sm:block"></div>
            </div>
      
            {/* Linha central curta */}
            <div className="h-[2px] w-20 bg-red-600 mx-2"></div>
      
            {/* Texto */}
            <span className="text-[12px] sm:text-[16px] font-semibold tracking-wide text-red-600">
              memória
            </span>
      
            {/* Círculo final */}
            <div className="h-5 w-5 sm:w-6 sm:h-6 rounded-full bg-red-600 ml-3 animate-bounce"></div>
            <span className="text-[12px] sm:text-[16px] font-semibold tracking-wide text-red-600 ml-3">
              movimento
            </span>
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600 ml-3"></div>
            <span className="text-[12px] sm:text-[16px] font-semibold tracking-wide text-red-600 ml-3">
              história
            </span>
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-90%);
          }
        }
      `}</style>
    </div>
  );
}