import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/post/${id}`, setPost);
  }, [id]);

  return (
    <main className="container flex flex--contato">
      <article className="cartao post">
        <h2 className="cartao_titulo">{post.title} NAO PUXA AS INFORMAÇÕES</h2>
        <p className="carta_texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
