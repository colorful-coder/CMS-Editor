@extends('layouts.adminlte')

@section('content')
<div class="container mt-3">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Create Post</div>
                <form action="{{ route('trumbowyg.store') }}" method="post">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title" class="form-control @error('title') is-invalid @enderror">
                            @error('title')
                            <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="content">Content</label>
                            <trunbowyg-component></trunbowyg-component>
                            @error('content')
                            <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save mr-1"></i> Save
                        </button>
                        <a href="{{ route('trumbowyg.index') }}" class="btn btn-default float-right">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection