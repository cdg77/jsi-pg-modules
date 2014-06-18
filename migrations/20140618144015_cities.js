'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.integer('countries_id').references('countries.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities');
};
