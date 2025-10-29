export interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  // optional fields; adjust to match your app's data shape
  data?: string;
  usuarioId?: number | null;
}

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  postagem?: Postagem[] | null;
}