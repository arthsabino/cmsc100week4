var request = require ('supertest'),
	should = require('should-http');
	
	describe('student', function(){
		var url = 'localhost:5000';
		describe('find()',function(){
			it('should retrieve all student record',function(done){
				request(url)
				.get('/students/')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);
					done();
				});
			});
		});
		describe('findOne()',function(done){
			it('should retrieve an existing student record',function(done){
				request(url)
				.get('/students/2013-11111')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					done();
				});
			});
		
		});
		
		describe('insert()',function(done){
			it('should return newly created student record',function(done){
				request(url)
				.post('/students/')
				.send({
					'studNo':'2013-12125',
					'name':'Toyang',
					'bdate':'1900-09-09'
				
				})
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.body.should.have.property('studNo');
					res.body.should.have.property('name');
					res.body.should.have.property('bdate');		
					done();
				});
			});
		
		});
	
	
	});