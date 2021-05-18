import PostMessage from "../models/postMessage.js"


export const getPosts = async (req, res, next)=>{
    try {
        const postMessages = await PostMessage.find()
    console.log(postMessages)
    res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

  }

  export const createPosts = async(req, res, next)=>{
     const post = req.body;
     try {
         const newpost = new PostMessage(post)
        await newpost.save()
        res.status(201).json({message: "sucssesfully created"})
     } catch (error) {
        res.status(409).json({message: error.message})
     }
  }