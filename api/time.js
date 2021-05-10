module.exports=(req, res)=>{
	res.status(200).send(Date.now().toString())
}
