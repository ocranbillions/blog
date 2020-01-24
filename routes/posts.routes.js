import { Router } from 'express';

const router = Router();

// Create blog post
router.post('/posts', async (req, res) => {
    try {
        res.send('creating post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get all posts
router.get('/posts', async (req, res) => {
    try {
        res.send('getting all posts');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get post by id
router.get('/posts/:id', async (req, res) => {
    try {
        res.send('getting single post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Update post
router.patch('/posts/:id', async (req, res) => {
    try {
        res.send('updating post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Delete post
router.delete('/posts/:id', async (req, res) => {
    try {
        res.send('deleting post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;