import express from "express";
import { 
  getFiles, 
  approveFile, 
  reviseFile, 
  downloadFileByPath, 
  getFileStats, 
  getFilesByStatus, 
  getApprovedFiles, 
  getITFiles,
  getAutomotiveFiles,
  getElectronicsFiles,
  getFoodFiles,
  getFilesByUploader,
  getMathematicsFiles,
  getFilesByUserDepartment,
  getComments,
  getFilesByUserDepartment_Status,
  ReadyToPrint,
  RevisedSenior,
} from "../controllers/file.controller.js";
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/department', verifyToken, getFilesByUserDepartment);

router.get('/allApprovedFiles', verifyToken, getFilesByUserDepartment_Status);

// Fetch all files
router.get("/", getFiles);

// Fetch files by uploaderUserId (authenticated user)
router.get('/uploader', verifyToken, getFilesByUploader);
  
// Fetch files by status
router.get("/status", getFilesByStatus);

// Fetch file statistics
router.get("/stats", getFileStats);

// Fetch approved files
router.get('/approved', getApprovedFiles);

router.get('/it-emc-files', getITFiles),
router.get('/automotive', getAutomotiveFiles),
router.get('/electronics', getElectronicsFiles),
router.get('/food', getFoodFiles),

router.get('/mathematics', getMathematicsFiles),

router.get('/comments/:fileId', getComments),

// Approve a file
router.patch("/:id/approve", approveFile);

router.patch("/:id/ready-to-print", ReadyToPrint);
router.post("/:id/revisedSenior", RevisedSenior);

// Revise a file
router.post("/:id/revise", reviseFile);


// Download a file by filepath
router.get("/download/:filepath", downloadFileByPath);




export default router;
