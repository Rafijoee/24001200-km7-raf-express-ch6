const imagekit = require('../libs/imageKit');

class UploadFile {

    static async uploadFile(req, res) {
        try{
            const stringFile = req.file.buffer.toString('base64');
            const fileName = req.file.originalname;

            const upload = await imagekit.upload({
                file: stringFile,
                fileName: fileName
            });

            const uploadPrisma = await prisma.upload.create({
                data: {
                    name: upload.name,
                    url: upload.url
                }
            });

            res.status(201).json({
                message: 'File uploaded successfully',
                data: upload
            });
        }
        catch(err){
            res.status(500).json({
                message: 'Internal server error',
                error: err.message
            });
        }
    }
}