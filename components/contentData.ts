// contentData.ts
export interface ContentItem {
    year: number;
    color: string;
    titulo: string;
    imagem?: string;
    video?: string;
    videoIn?: string;
    texto: string;
    awards: string,
    award?: string,
    imagens: string[];
}

export interface ContentData {
    [key: string]: ContentItem;
}

export const contentData: ContentData = {
    Data1: {
        year: 2025,
        color: "",
        titulo: "A Melhor Mãe do Mundo",
        imagem: "/melhor-mae-do-mundo/melhor-mae-do-mundo-bk.png",
        video: "",
        videoIn: "/videos/melhor-mae-do-mundo-vi.mp4",
        texto: `prod: bionica filmes + galeria distribuidora
                dir: anna muylaert, dop: lilis soares
                art: maira mesquita + juliana ribeiro 
                fig: nina maria + yuri kobayashi
                awards: - Direção: Anna Muylaert`,
                awards: `Melhor Filme, Roteiro, Atriz e Atriz Coadjuvante, Cine PE 2025
                Prêmio Especial do Júri (Coup de cœur), Festival de Cinema Latino-Americano de Biarritz 
                Prêmio de Melhor Interpretação para Shirley Cruz, Melhor Roteiro, Festival de Cinema de Guadalajara 
                Premio do Público de Melhor Ficção, Rail D'Oc, Cine+ Festival, Festival CinéLatino Toulouse`,
        imagens: ["/melhor-mae-do-mundo/melhor-mae-do-mundo-01.png",
             "/melhor-mae-do-mundo/melhor-mae-do-mundo-02.png",
              "/melhor-mae-do-mundo/melhor-mae-do-mundo-03.png"]
        // imagens: ["/broto-legal-ma.png", "/broto-legal-ve.png", "/broto-legal-pa.png"]
    },
    Data2: {
        year: 2024,
        color: "",
        titulo: "Amarela",
        video: "",
        videoIn: "/amarela/trailleramarela.mp4",
        imagem: "/amarela/amarela-bk.png",
        texto: `prod: mymama entertainment
                dir: andre hayato saito
                dop: helcio alemao
                art: luana demange
                fig: yuri kobayashi
                `,
        awards: `Melhor Direção de Arte e Premio Canal Brasil De Curtas, 36 Kinoforum 2025
                Concorreu a Palma de Ouro de Melhor Curta-Metragem, Festival de Cannes 2024
                Melhor Curta de Ficção, Festival de Havana
                Melhor Curta de Drama Chicago Southland International Film Festival, Hollywood Shortsfest Melhor Curta, Hollywood Shortsfest
                Grand Prix, Festival Tous Courts 
                `,
        award: "/festival-de-cannes.png",
        imagens: ["/amarela/amarela-01.png", "/amarela/amarela-02.png", "/amarela/amarela-bk.png"]
    },
    Data3: {
        year: 2024,
        color: "",
        titulo: "Passagrana",
        imagem: "/passagrana/passagrana-bk.webp",
        video: "",
        videoIn: "/passagrana/trailer.pssgrna.mp4",
        texto: `prod: intro pictures + star original productions
                dir: ravel cabral
                dop: carlos zalasik
                art: rafael blas
                fig: yuri kobayashi`,
        awards: `Premio Melhor Fotografia e Melhor Trilha Sonora, Festival Internacional de Cinema de Carazinho em 2025`,
        award: "",
        imagens: ["/passagrana/passagrana-01.png", "/passagrana/passagrana-02.png", "/passagrana/passagrana-03.png"]
    },
    Data4: {
        year: 2014,
        color: "",
        titulo: "Amigos Sem Compromisso",
        video: "/",
        videoIn: "/",
        imagem: "/",
        texto: `prod: bionica filmes + sony pictures
                dir: rafael gomes
                dop: julia equi
                art: rita faustini
                fig: yuri kobayashi
                `,
        awards: "",
        award: "",
        imagens: ["/", "/", "/"]
    },
    Data5: {
        year: 2024,
        color: "",
        titulo: "Doce Família",
        video: "",
        videoIn: "/doce-familia/trailler-doce-familia.mp4",
        imagem: "/doce-familia/doce-familia-bk.png",
        texto: `prod: glaz entretenimento + galeria distribuidora
                dir: carolina durao
                dop: pedro faerstein
                art: rafael blas + camila vieira
                fig: yuri kobayashi`,
        awards: "",
        award: "",
        imagens: ["/doce-familia/doce-familia-01.png", "/doce-familia/doce-familia-02.jpg", "/doce-familia/doce-familia-03.png"]
    },
    Data6: {
        year: 2022,
        color: "",
        titulo: "O Caso Celso Daniel",
        video: "",
        videoIn: "/caso-celso-daniel/trailerccd.mp4",
        imagem: "/caso-celso-daniel/caso-celso-daniel-bk.png",
        texto: `prod: escarlate conteudo audiovisual
                dir: marcos jorge
                dop: alexandre elaiuy
                art: amanda whitaker
                fig: yuri kobayashi`,
        awards: "",
        award: "",
        imagens: ["/caso-celso-daniel/caso-celso-daniel-01.png", "/caso-celso-daniel/caso-celso-daniel-02.png", "/caso-celso-daniel/caso-celso-daniel-03.png"]
    },
    Data7: {
        year: 2021,
        color: "",
        titulo: "Céu de Agosto",
        video: "",
        videoIn: "/ceu-de-agosto/céu_de_agosto.mp4",
        imagem: "/ceu-de-agosto/ceu-de-agoosto-bk.png",
        texto: `prod: amordoch films + irrelevant media + substancia filmes
                dir: jasmin tenucci
                dop: bruno tiezzi
                art: diogo hayashi
                fig: yuri kobayashi`,
        awards: "Premio Menção Especial, Festival de Cannes 2021",
        award: "/festival-de-cannes.png",
        imagens: ["/ceu-de-agosto/ceu-de-agosto-01.jpg", "/ceu-de-agosto/ceu-de-agosto-02.jpg", "/ceu-de-agosto/ceu-de-agosto-02.png"]
    },
    Data8: {
        year: 2022,
        color: "",
        titulo: "Um Broto Legal",
        video: "",
        videoIn: "/um-broto-legal/trailer_Insta.mp4",
        imagem: "/um-broto-legal/broto-legal-bk.png",
        texto: `prod: lapfilme
                dir: luis alberto (gal)
                dop: uli burtin
                art: glauce queiroz
                fig: yuri kobayashi
                `,
        awards: "",
        award: "",
        imagens: ["/um-broto-legal/um-broto-legal-02.png", "/um-broto-legal/um-broto-legal-01.png", "/um-broto-legal/um-broto-legal-03.png"]
    },
    Data9: {
        year: 2021,
        color: "",
        titulo: "Meu Álbum de Amores",
        video: "",
        videoIn: "/meu-album-de-amores/trailer___meu_Álbum_de_amores.mp4",
        imagem: "/meu-album-de-amores/meu-album-de-amores-bk.png",
        texto: `prod: bionica filmes
            dir: rafael gomes
            dop: jacob solitrenick
            art: glauce queiroz
            fig: yuri kobayashi`,
        awards: "",
        award: "",
        imagens: ["/meu-album-de-amores/meu-album-de-amores-01.png", "/meu-album-de-amores/meu-album-de-amores-02.png", "/meu-album-de-amores/meu-album-de-amores-03.png"]
    },
};