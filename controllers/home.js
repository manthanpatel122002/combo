try{
var home = async (req, res) => {
  res.send("hello world");
};
}
catch{
    res.status(200).json({ data: "Server Error " });
}

module.exports = { home };
