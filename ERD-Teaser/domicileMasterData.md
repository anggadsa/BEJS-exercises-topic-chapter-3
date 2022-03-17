# `ERD Exercises - Domicile Master Data`

## Directions

- Diketahui bahwa suatu aplikasi bernama `Doomscile`  menginginkan pemetaan database untuk mengindentifikasi alamat.
- Pertama, terdapat `Country` yang memiliki informasi sebagai berikut: `country_id`, `name` dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan. 
- `Country` dapat memiliki banyak `Province`.
- Kedua, terdapat `Province` yang memiliki informasi sebagai berikut: `province_id`, `name` dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.
- `Province` dapat memiliki banyak `City`.
- Ketiga, terdapat `City` yang memiliki informasi sebagai berikut: `city_id`, `name` dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.
- `City` dapat memiliki banyak `District`.
- Keempat, terdapat `District` yang memiliki informasi sebagai berikut: `district_id`, `name` dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.
- Tiap `Address` dapat memiliki `Country`, `Province`, `City`, dan `District`. 
- `Address` yang memiliki informasi sebagai berikut: `address_id`, `address` dan attribut lainnya yang berkaitan dengan relasi. Anda perlu melakukan analisis sendiri, tambahkan attribut sesuai `directions` yang telah diberikan.

### Objectives

- Buatlah ERD untuk menggambarkan poin2 [Directions](#directions) yang disebutkan diatas.
- Tunjukkan mana yang merupakan `entitas`, `primary key`, `foreign key`, `attributes` untuk setiap entitas, dan `relasi` diantara entitas. 